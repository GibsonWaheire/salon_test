import { Link } from 'react-router-dom'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-1-.43z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2C2C2C', color: '#FDFAF9', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#FDFAF9' }}>LUXE</div>
              <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>STUDIO</div>
            </div>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', lineHeight: 1.8, color: '#b0a8a8', maxWidth: '220px' }}>
              Where beauty meets luxury. Your sanctuary of elegance and transformation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {[InstagramIcon, FacebookIcon, TikTokIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    color: '#b0a8a8',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 38,
                    height: 38,
                    border: '1px solid #444',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; e.currentTarget.style.borderColor = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#b0a8a8'; e.currentTarget.style.borderColor = '#444' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.25rem' }}>Quick Links</h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services & Pricing' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/about', label: 'About Us' },
              { to: '/book', label: 'Book Appointment' },
              { to: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ display: 'block', fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#b0a8a8', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = '#b0a8a8'}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.25rem' }}>Services</h4>
            {['Hair Cuts & Color', 'Nail Art & Manicure', 'Skin & Facials', 'Makeup & Bridal', 'Hair Styling', 'Lash Extensions'].map((s) => (
              <p key={s} style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#b0a8a8', marginBottom: '0.6rem' }}>{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.25rem' }}>Contact</h4>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#b0a8a8', marginBottom: '0.6rem', lineHeight: 1.7 }}>123 Elegance Ave,<br />Beverly Hills, CA 90210</p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#b0a8a8', marginBottom: '0.6rem' }}>+1 (310) 555-0198</p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#b0a8a8', marginBottom: '1rem' }}>hello@luxestudio.com</p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.78rem', color: '#b0a8a8', lineHeight: 1.8 }}>
              Mon–Fri: 9am – 7pm<br />
              Sat: 9am – 6pm<br />
              Sun: 10am – 4pm
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #3a3a3a', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', color: '#666' }}>
            © {new Date().getFullYear()} Luxe Studio. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', color: '#666' }}>
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
