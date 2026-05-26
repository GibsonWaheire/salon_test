import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
]

export default function Contact() {
  useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

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
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FDFAF9', marginBottom: '1rem', lineHeight: 1.1 }}>
            Contact Us
          </h1>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: 'rgba(253,250,249,0.7)', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            We'd love to hear from you. Reach out for enquiries, bookings, or just to say hello.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="section-padding" style={{ backgroundColor: '#FDFAF9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

          {/* Left — Info */}
          <div>
            <div className="fade-in" style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: '0.5rem' }}>Location</p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#2C2C2C', marginBottom: '0.5rem' }}>Find Us</h3>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: '#7A6E6E', lineHeight: 1.8 }}>
                123 Elegance Avenue<br />
                Beverly Hills, CA 90210<br />
                United States
              </p>
            </div>

            <div className="fade-in fade-in-delay-1" style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: '0.5rem' }}>Phone & Email</p>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: '#7A6E6E', lineHeight: 2 }}>
                <a href="tel:+13105550198" style={{ color: '#7A6E6E', textDecoration: 'none' }}>+1 (310) 555-0198</a><br />
                <a href="mailto:hello@luxestudio.com" style={{ color: '#C9A84C', textDecoration: 'none' }}>hello@luxestudio.com</a>
              </p>
            </div>

            <div className="fade-in fade-in-delay-2" style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: '0.75rem' }}>Opening Hours</p>
              <div style={{ borderTop: '1px solid #F4B8C1' }}>
                {hours.map((h, i) => (
                  <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid #F4B8C1', gap: '1rem' }}>
                    <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#2C2C2C', fontWeight: 700 }}>{h.day}</span>
                    <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#7A6E6E' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="fade-in fade-in-delay-1">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#FAE0E4' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#2C2C2C', marginBottom: '0.75rem' }}>Message Sent!</h3>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', color: '#7A6E6E', lineHeight: 1.7 }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ backgroundColor: '#FAE0E4', padding: '2.5rem' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#2C2C2C', marginBottom: '1.75rem' }}>Send a Message</h3>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle} htmlFor="c-name">Your Name *</label>
                  <input id="c-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Doe" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = '#E8D5C4'} />
                </div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle} htmlFor="c-email">Email Address *</label>
                  <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = '#E8D5C4'} />
                </div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={labelStyle} htmlFor="c-message">Message *</label>
                  <textarea id="c-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="How can we help you?" style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = '#E8D5C4'} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '420px', position: 'relative', overflow: 'hidden', backgroundColor: '#e8e0d8' }}>
        <iframe
          title="Luxe Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203483747!2d-118.4003563!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
          width="100%"
          height="420"
          style={{ border: 0, filter: 'grayscale(30%) sepia(10%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay pin label */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          backgroundColor: '#2C2C2C', color: '#FDFAF9',
          padding: '0.75rem 1.5rem',
          fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
          pointerEvents: 'none',
          borderLeft: '3px solid #C9A84C',
        }}>
          Luxe Studio · Beverly Hills
        </div>
      </section>
    </div>
  )
}
