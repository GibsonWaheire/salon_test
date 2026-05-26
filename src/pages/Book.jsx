import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const serviceOptions = [
  "Women's Haircut", "Men's Haircut", "Full Color", "Highlights / Balayage",
  "Keratin Treatment", "Blowout & Style",
  "Classic Manicure", "Gel Manicure", "Acrylic Full Set", "Classic Pedicure", "Spa Pedicure", "Nail Art",
  "Signature Facial", "HydraFacial", "Anti-Aging Facial", "Chemical Peel", "LED Light Therapy",
  "Bridal Makeup", "Event Makeup", "Airbrush Makeup", "Lash Extensions", "Makeup Lesson",
]

export default function Book() {
  useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.9rem 1rem',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.9rem',
    color: '#2C2C2C',
    backgroundColor: '#FDFAF9',
    border: '1px solid #E8D5C4',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#7A6E6E',
    fontWeight: 700,
    marginBottom: '0.5rem',
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{
        backgroundColor: '#2C2C2C',
        padding: '5rem 1.5rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Reserve Your Visit</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FDFAF9', marginBottom: '1rem', lineHeight: 1.1 }}>
            Book an Appointment
          </h1>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: 'rgba(253,250,249,0.7)', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            Fill in the form below and we'll confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAE0E4' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {submitted ? (
            <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#FDFAF9' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✓</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#2C2C2C', marginBottom: '1rem' }}>
                Thank You, {form.name}!
              </h2>
              <p style={{ fontFamily: 'Lato, sans-serif', color: '#7A6E6E', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
                Your appointment request has been received. Our team will reach out to confirm your booking at <strong>{form.email}</strong> within 24 hours.
              </p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>Book Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fade-in" style={{ backgroundColor: '#FDFAF9', padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#2C2C2C', marginBottom: '2rem', textAlign: 'center' }}>
                Your Details
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Jane Doe"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="email">Email Address *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="jane@example.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle} htmlFor="phone">Phone Number *</label>
                <input
                  id="phone" name="phone" type="tel" required
                  value={form.phone} onChange={handleChange}
                  placeholder="+1 (310) 555-0198"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle} htmlFor="service">Select Service *</label>
                <select
                  id="service" name="service" required
                  value={form.service} onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                >
                  <option value="">Choose a service...</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="date">Preferred Date *</label>
                  <input
                    id="date" name="date" type="date" required
                    value={form.date} onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="time">Preferred Time *</label>
                  <select
                    id="time" name="time" required
                    value={form.time} onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                  >
                    <option value="">Select a time...</option>
                    {['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={labelStyle} htmlFor="notes">Special Requests or Notes</label>
                <textarea
                  id="notes" name="notes"
                  value={form.notes} onChange={handleChange}
                  placeholder="Any allergies, preferences, or special occasions we should know about..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = '#E8D5C4'}
                />
              </div>

              <div style={{ borderTop: '1px solid #F4B8C1', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', maxWidth: 300, fontSize: '0.75rem' }}>
                  Confirm Booking Request
                </button>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', color: '#b0a8a8', textAlign: 'center' }}>
                  We'll confirm your appointment within 24 hours via email or phone.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
