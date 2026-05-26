import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: '✂',
    title: 'Hair',
    desc: 'Precision cuts, vibrant color, and flawless styling by master colorists.',
    price: 'From $85',
  },
  {
    icon: '💅',
    title: 'Nails',
    desc: 'Gel, acrylic, nail art, and luxe manicure & pedicure treatments.',
    price: 'From $45',
  },
  {
    icon: '✨',
    title: 'Skin & Facials',
    desc: 'Rejuvenating facials and bespoke skin treatments for radiant results.',
    price: 'From $120',
  },
  {
    icon: '💄',
    title: 'Makeup',
    desc: 'Editorial makeup, bridal glam, and special occasion artistry.',
    price: 'From $150',
  },
]

const testimonials = [
  { name: 'Sophia R.', quote: 'Absolute perfection. The team transformed my hair beyond what I imagined. I walked out feeling like a different woman.', service: 'Hair Color & Cut' },
  { name: 'Isabella M.', quote: 'The most luxurious salon experience I\'ve ever had. Every detail is curated to make you feel special.', service: 'Bridal Makeup' },
  { name: 'Ava L.', quote: 'My go-to for facials. The skin specialists here truly understand what your skin needs.', service: 'Signature Facial' },
  { name: 'Charlotte B.', quote: 'From the ambiance to the results — Luxe Studio is in a class of its own. Simply divine.', service: 'Nail Art' },
]

export default function Home() {
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section style={{
        height: '100vh',
        minHeight: 600,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #2C2C2C 0%, #3d2e2e 40%, #4a3030 100%)',
      }}>
        {/* Background image overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(44,44,44,0.5) 0%, rgba(44,44,44,0.6) 60%, rgba(44,44,44,0.85) 100%)',
        }} />

        {/* Gold accent lines */}
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: 1, height: '40%', background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '15%', right: '5%', width: 1, height: '40%', background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)', opacity: 0.4 }} />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: 760 }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.25rem', fontWeight: 700 }}>
            Beverly Hills · Est. 2018
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: '#FDFAF9',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}>
            Where Beauty<br />
            <em style={{ color: '#F4B8C1', fontStyle: 'italic' }}>Meets Luxury</em>
          </h1>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.05rem', color: 'rgba(253,250,249,0.8)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.8, fontWeight: 300 }}>
            An elevated sanctuary where artistry and indulgence converge. Experience beauty reimagined.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book">
              <button className="btn-primary">Book Your Experience</button>
            </Link>
            <Link to="/services">
              <button className="btn-outline" style={{ borderColor: 'rgba(253,250,249,0.5)', color: '#FDFAF9' }}>Explore Services</button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.6 }}>
          <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FDFAF9' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </div>
      </section>

      {/* Intro Strip */}
      <section style={{ backgroundColor: '#F4B8C1', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontStyle: 'italic', color: '#2C2C2C', letterSpacing: '0.05em' }}>
          "Your beauty is our masterpiece — crafted with passion, delivered with precision."
        </p>
      </section>

      {/* About Intro */}
      <section className="section-padding" style={{ backgroundColor: '#FDFAF9', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Our Story</p>
          <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2C2C2C', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            A Sanctuary Born from Passion
          </h2>
          <div className="gold-divider fade-in fade-in-delay-2" style={{ marginBottom: '2rem' }} />
          <p className="fade-in fade-in-delay-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#7A6E6E', lineHeight: 1.9, marginBottom: '1rem' }}>
            At Luxe Studio, we believe beauty is an art form. Founded in the heart of Beverly Hills, our atelier blends world-class technique with a deeply personal touch — transforming each visit into a ritual of self-care and confidence.
          </p>
          <p className="fade-in fade-in-delay-3" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#7A6E6E', lineHeight: 1.9, marginBottom: '2rem' }}>
            Every detail — from our curated product lines to our thoughtfully designed space — has been crafted to elevate your experience far beyond the ordinary.
          </p>
          <Link to="/about">
            <button className="btn-outline fade-in fade-in-delay-4">Discover Our Story</button>
          </Link>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding" style={{ backgroundColor: '#FAE0E4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.75rem', fontWeight: 700 }}>What We Offer</p>
            <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2C2C2C', marginBottom: '1rem' }}>
              Signature Services
            </h2>
            <div className="gold-divider fade-in fade-in-delay-2" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`fade-in fade-in-delay-${i + 1}`}
                style={{
                  backgroundColor: '#FDFAF9',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                  borderBottom: '3px solid transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,168,76,0.15)'; e.currentTarget.style.borderBottom = '3px solid #C9A84C' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderBottom = '3px solid transparent' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#2C2C2C', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.88rem', color: '#7A6E6E', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.78rem', letterSpacing: '0.1em', color: '#C9A84C', fontWeight: 700, textTransform: 'uppercase' }}>{s.price}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services">
              <button className="btn-primary">View All Services & Pricing</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#2C2C2C', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { num: '2,500+', label: 'Happy Clients' },
            { num: '15+', label: 'Expert Stylists' },
            { num: '6', label: 'Years of Excellence' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="fade-in">
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 700, color: '#C9A84C', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.num}</p>
              <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b0a8a8' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ backgroundColor: '#FDFAF9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.75rem', fontWeight: 700 }}>Client Love</p>
            <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2C2C2C', marginBottom: '1rem' }}>
              What Our Clients Say
            </h2>
            <div className="gold-divider fade-in fade-in-delay-2" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`fade-in fade-in-delay-${i + 1}`}
                style={{ backgroundColor: '#FAE0E4', padding: '2rem', position: 'relative' }}
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', color: '#C9A84C', lineHeight: 0.6, marginBottom: '1rem', opacity: 0.5 }}>"</div>
                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#2C2C2C', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid #F4B8C1', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#2C2C2C' }}>{t.name}</p>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em', color: '#C9A84C', textTransform: 'uppercase', marginTop: '0.25rem' }}>{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(44,44,44,0.75)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="fade-in" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#FDFAF9', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready for Your<br /><em style={{ color: '#F4B8C1' }}>Transformation?</em>
          </h2>
          <p className="fade-in fade-in-delay-1" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: 'rgba(253,250,249,0.8)', marginBottom: '2.5rem', fontWeight: 300 }}>
            Book your appointment today and experience luxury redefined.
          </p>
          <Link to="/book">
            <button className="btn-primary fade-in fade-in-delay-2">Reserve Your Visit</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
