import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(253,250,249,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#2C2C2C', letterSpacing: '0.05em' }}>
              LUXE
            </span>
            <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase', marginTop: '1px' }}>
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: location.pathname === l.to ? '#C9A84C' : '#2C2C2C',
                fontWeight: 700,
                transition: 'color 0.2s',
                borderBottom: location.pathname === l.to ? '1px solid #C9A84C' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/book">
            <button className="btn-primary" style={{ fontSize: '0.68rem' }}>Book Now</button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none' }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: '#2C2C2C', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#2C2C2C', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: '#2C2C2C', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#FDFAF9', borderTop: '1px solid #F4B8C1', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: location.pathname === l.to ? '#C9A84C' : '#2C2C2C',
                fontWeight: 700,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/book">
            <button className="btn-primary" style={{ width: '100%' }}>Book Now</button>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
