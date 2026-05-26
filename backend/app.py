from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), "salon.db")


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    with get_db() as conn:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS services (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                duration_minutes INTEGER NOT NULL,
                price REAL NOT NULL
            );

            CREATE TABLE IF NOT EXISTS staff (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                specialty TEXT
            );

            CREATE TABLE IF NOT EXISTS clients (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone TEXT,
                email TEXT
            );

            CREATE TABLE IF NOT EXISTS appointments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                client_id INTEGER NOT NULL,
                staff_id INTEGER NOT NULL,
                service_id INTEGER NOT NULL,
                datetime TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'scheduled',
                notes TEXT,
                FOREIGN KEY (client_id) REFERENCES clients(id),
                FOREIGN KEY (staff_id) REFERENCES staff(id),
                FOREIGN KEY (service_id) REFERENCES services(id)
            );
        """)


# --- Services ---

@app.route("/services", methods=["GET"])
def get_services():
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM services ORDER BY name").fetchall()
    return jsonify([dict(r) for r in rows])


@app.route("/services/<int:id>", methods=["GET"])
def get_service(id):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM services WHERE id = ?", (id,)).fetchone()
    if row is None:
        return jsonify({"error": "Not found"}), 404
    return jsonify(dict(row))


@app.route("/services", methods=["POST"])
def create_service():
    data = request.get_json()
    name = data.get("name", "").strip()
    duration = data.get("duration_minutes")
    price = data.get("price")
    if not name or duration is None or price is None:
        return jsonify({"error": "name, duration_minutes, and price are required"}), 400
    with get_db() as conn:
        cur = conn.execute(
            "INSERT INTO services (name, duration_minutes, price) VALUES (?, ?, ?)",
            (name, int(duration), float(price)),
        )
        row = conn.execute("SELECT * FROM services WHERE id = ?", (cur.lastrowid,)).fetchone()
    return jsonify(dict(row)), 201


@app.route("/services/<int:id>", methods=["PUT"])
def update_service(id):
    data = request.get_json()
    with get_db() as conn:
        row = conn.execute("SELECT * FROM services WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        existing = dict(row)
        name = data.get("name", existing["name"])
        duration = data.get("duration_minutes", existing["duration_minutes"])
        price = data.get("price", existing["price"])
        conn.execute(
            "UPDATE services SET name=?, duration_minutes=?, price=? WHERE id=?",
            (name, int(duration), float(price), id),
        )
        updated = conn.execute("SELECT * FROM services WHERE id = ?", (id,)).fetchone()
    return jsonify(dict(updated))


@app.route("/services/<int:id>", methods=["DELETE"])
def delete_service(id):
    with get_db() as conn:
        row = conn.execute("SELECT id FROM services WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        conn.execute("DELETE FROM services WHERE id = ?", (id,))
    return "", 204


# --- Staff ---

@app.route("/staff", methods=["GET"])
def get_staff():
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM staff ORDER BY name").fetchall()
    return jsonify([dict(r) for r in rows])


@app.route("/staff/<int:id>", methods=["GET"])
def get_staff_member(id):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM staff WHERE id = ?", (id,)).fetchone()
    if row is None:
        return jsonify({"error": "Not found"}), 404
    return jsonify(dict(row))


@app.route("/staff", methods=["POST"])
def create_staff():
    data = request.get_json()
    name = data.get("name", "").strip()
    if not name:
        return jsonify({"error": "name is required"}), 400
    specialty = data.get("specialty", "").strip() or None
    with get_db() as conn:
        cur = conn.execute(
            "INSERT INTO staff (name, specialty) VALUES (?, ?)", (name, specialty)
        )
        row = conn.execute("SELECT * FROM staff WHERE id = ?", (cur.lastrowid,)).fetchone()
    return jsonify(dict(row)), 201


@app.route("/staff/<int:id>", methods=["PUT"])
def update_staff(id):
    data = request.get_json()
    with get_db() as conn:
        row = conn.execute("SELECT * FROM staff WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        existing = dict(row)
        name = data.get("name", existing["name"])
        specialty = data.get("specialty", existing["specialty"])
        conn.execute(
            "UPDATE staff SET name=?, specialty=? WHERE id=?", (name, specialty, id)
        )
        updated = conn.execute("SELECT * FROM staff WHERE id = ?", (id,)).fetchone()
    return jsonify(dict(updated))


@app.route("/staff/<int:id>", methods=["DELETE"])
def delete_staff(id):
    with get_db() as conn:
        row = conn.execute("SELECT id FROM staff WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        conn.execute("DELETE FROM staff WHERE id = ?", (id,))
    return "", 204


# --- Clients ---

@app.route("/clients", methods=["GET"])
def get_clients():
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM clients ORDER BY name").fetchall()
    return jsonify([dict(r) for r in rows])


@app.route("/clients/<int:id>", methods=["GET"])
def get_client(id):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM clients WHERE id = ?", (id,)).fetchone()
    if row is None:
        return jsonify({"error": "Not found"}), 404
    return jsonify(dict(row))


@app.route("/clients", methods=["POST"])
def create_client():
    data = request.get_json()
    name = data.get("name", "").strip()
    if not name:
        return jsonify({"error": "name is required"}), 400
    phone = data.get("phone", "").strip() or None
    email = data.get("email", "").strip() or None
    with get_db() as conn:
        cur = conn.execute(
            "INSERT INTO clients (name, phone, email) VALUES (?, ?, ?)",
            (name, phone, email),
        )
        row = conn.execute("SELECT * FROM clients WHERE id = ?", (cur.lastrowid,)).fetchone()
    return jsonify(dict(row)), 201


@app.route("/clients/<int:id>", methods=["PUT"])
def update_client(id):
    data = request.get_json()
    with get_db() as conn:
        row = conn.execute("SELECT * FROM clients WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        existing = dict(row)
        name = data.get("name", existing["name"])
        phone = data.get("phone", existing["phone"])
        email = data.get("email", existing["email"])
        conn.execute(
            "UPDATE clients SET name=?, phone=?, email=? WHERE id=?",
            (name, phone, email, id),
        )
        updated = conn.execute("SELECT * FROM clients WHERE id = ?", (id,)).fetchone()
    return jsonify(dict(updated))


@app.route("/clients/<int:id>", methods=["DELETE"])
def delete_client(id):
    with get_db() as conn:
        row = conn.execute("SELECT id FROM clients WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        conn.execute("DELETE FROM clients WHERE id = ?", (id,))
    return "", 204


# --- Appointments ---

APPOINTMENT_QUERY = """
    SELECT
        a.id, a.datetime, a.status, a.notes,
        a.client_id, c.name AS client_name,
        a.staff_id, s.name AS staff_name,
        a.service_id, sv.name AS service_name,
        sv.duration_minutes, sv.price
    FROM appointments a
    JOIN clients c ON c.id = a.client_id
    JOIN staff s ON s.id = a.staff_id
    JOIN services sv ON sv.id = a.service_id
"""


@app.route("/appointments", methods=["GET"])
def get_appointments():
    date = request.args.get("date")
    staff_id = request.args.get("staff_id")
    client_id = request.args.get("client_id")
    status = request.args.get("status")

    query = APPOINTMENT_QUERY + " WHERE 1=1"
    params = []
    if date:
        query += " AND DATE(a.datetime) = ?"
        params.append(date)
    if staff_id:
        query += " AND a.staff_id = ?"
        params.append(staff_id)
    if client_id:
        query += " AND a.client_id = ?"
        params.append(client_id)
    if status:
        query += " AND a.status = ?"
        params.append(status)
    query += " ORDER BY a.datetime"

    with get_db() as conn:
        rows = conn.execute(query, params).fetchall()
    return jsonify([dict(r) for r in rows])


@app.route("/appointments/<int:id>", methods=["GET"])
def get_appointment(id):
    with get_db() as conn:
        row = conn.execute(APPOINTMENT_QUERY + " WHERE a.id = ?", (id,)).fetchone()
    if row is None:
        return jsonify({"error": "Not found"}), 404
    return jsonify(dict(row))


@app.route("/appointments", methods=["POST"])
def create_appointment():
    data = request.get_json()
    client_id = data.get("client_id")
    staff_id = data.get("staff_id")
    service_id = data.get("service_id")
    dt = data.get("datetime", "").strip()
    if not all([client_id, staff_id, service_id, dt]):
        return jsonify({"error": "client_id, staff_id, service_id, and datetime are required"}), 400
    status = data.get("status", "scheduled")
    notes = data.get("notes", "").strip() or None
    with get_db() as conn:
        cur = conn.execute(
            "INSERT INTO appointments (client_id, staff_id, service_id, datetime, status, notes) VALUES (?, ?, ?, ?, ?, ?)",
            (client_id, staff_id, service_id, dt, status, notes),
        )
        row = conn.execute(APPOINTMENT_QUERY + " WHERE a.id = ?", (cur.lastrowid,)).fetchone()
    return jsonify(dict(row)), 201


@app.route("/appointments/<int:id>", methods=["PUT"])
def update_appointment(id):
    data = request.get_json()
    with get_db() as conn:
        row = conn.execute("SELECT * FROM appointments WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        existing = dict(row)
        client_id = data.get("client_id", existing["client_id"])
        staff_id = data.get("staff_id", existing["staff_id"])
        service_id = data.get("service_id", existing["service_id"])
        dt = data.get("datetime", existing["datetime"])
        status = data.get("status", existing["status"])
        notes = data.get("notes", existing["notes"])
        conn.execute(
            "UPDATE appointments SET client_id=?, staff_id=?, service_id=?, datetime=?, status=?, notes=? WHERE id=?",
            (client_id, staff_id, service_id, dt, status, notes, id),
        )
        updated = conn.execute(APPOINTMENT_QUERY + " WHERE a.id = ?", (id,)).fetchone()
    return jsonify(dict(updated))


@app.route("/appointments/<int:id>", methods=["DELETE"])
def delete_appointment(id):
    with get_db() as conn:
        row = conn.execute("SELECT id FROM appointments WHERE id = ?", (id,)).fetchone()
        if row is None:
            return jsonify({"error": "Not found"}), 404
        conn.execute("DELETE FROM appointments WHERE id = ?", (id,))
    return "", 204


if __name__ == "__main__":
    init_db()
    app.run(debug=True, port=5000)
