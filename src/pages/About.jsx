import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const team = [
  {
    name: 'Isabella Fontaine',
    role: 'Founder & Master Colorist',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
    bio: '15+ years transforming hair with color mastery. Trained in Paris and New York.',
  },
  {
    name: 'Camille Laurent',
    role: 'Lead Stylist',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Precision cuts and avant-garde styling. Featured in Vogue and Harper\'s Bazaar.',
  },
  {
    name: 'Sophia Chen',
    role: 'Senior Nail Artist',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Award-winning nail artistry. Specializes in intricate designs and gel sculpture.',
  },
  {
    name: 'Amara Osei',
    role: 'Skin Specialist & Aesthetician',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    bio: 'Licensed aesthetician with expertise in holistic skincare and advanced facials.',
  },
  {
    name: 'Valentina Russo',
    role: 'Makeup Artist & Bridal Specialist',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    bio: 'Bringing bridal visions to life for over a decade. Trained in Milan and London.',
  },
  {
    name: 'Naomi Williams',
    role: 'Color Technician',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
    bio: 'Balayage and lived-in color specialist. Creates effortlessly sun-kissed results.',
  },
]

const values = [
  { icon: '◇', title: 'Artistry', desc: 'Every service is a work of art — executed with precision and creative vision.' },
  { icon: '◈', title: 'Excellence', desc: 'We hold ourselves to the highest standards, using only premium products and techniques.' },
  { icon: '◉', title: 'Personalization', desc: 'No two clients are the same. Every experience is tailored to you, uniquely.' },
  { icon: '◎', title: 'Sanctuary', desc: 'We\'ve crafted a space where you can breathe, unwind, and be transformed.' },
]

export default function About() {
  useScrollAnimation()

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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Our Story</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FDFAF9', marginBottom: '1rem', lineHeight: 1.1 }}>
            About Luxe Studio
          </h1>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: 'rgba(253,250,249,0.7)', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            A story of passion, artistry, and an unwavering commitment to beauty.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" style={{ backgroundColor: '#FDFAF9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
                alt="Luxe Studio Interior"
                className="fade-in"
                style={{ width: '100%', maxWidth: '500px', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                width: '60%', height: '60%',
                border: '2px solid #C9A84C',
                zIndex: -1,
              }} />
            </div>
          </div>
          <div>
            <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>The Philosophy</p>
            <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 600, color: '#2C2C2C', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              More Than a Salon.<br />
              <em style={{ color: '#C9A84C' }}>A Destination.</em>
            </h2>
            <div className="gold-divider fade-in fade-in-delay-2" style={{ margin: '0 0 1.5rem' }} />
            <p className="fade-in fade-in-delay-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem', color: '#7A6E6E', lineHeight: 1.9, marginBottom: '1rem' }}>
              Luxe Studio was born from a singular vision: to create a space where beauty is approached as a fine art and every client is treated as a muse. Founded in 2018 by master colorist Isabella Fontaine, we set out to redefine what a salon experience could be.
            </p>
            <p className="fade-in fade-in-delay-3" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem', color: '#7A6E6E', lineHeight: 1.9, marginBottom: '1rem' }}>
              We believe that true luxury lies in the details — the warmth of your welcome, the precision of the cut, the glow after a facial. Every element of Luxe Studio has been thoughtfully designed to create moments you carry with you long after you leave.
            </p>
            <p className="fade-in fade-in-delay-4" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.95rem', color: '#7A6E6E', lineHeight: 1.9, marginBottom: '2rem' }}>
              Our team of internationally trained artists brings together diverse expertise united by a single passion: making you feel extraordinary.
            </p>
            <Link to="/book">
              <button className="btn-primary fade-in fade-in-delay-4">Book an Experience</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: '#FAE0E4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.75rem', fontWeight: 700 }}>What Guides Us</p>
            <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2C2C2C', marginBottom: '1rem' }}>
              Our Core Values
            </h2>
            <div className="gold-divider fade-in fade-in-delay-2" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={v.title} className={`fade-in fade-in-delay-${i + 1}`} style={{ backgroundColor: '#FDFAF9', padding: '2.5rem 2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'serif', fontSize: '2rem', color: '#C9A84C', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600, color: '#2C2C2C', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.875rem', color: '#7A6E6E', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ backgroundColor: '#FDFAF9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.75rem', fontWeight: 700 }}>The Artists</p>
            <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2C2C2C', marginBottom: '1rem' }}>
              Meet Our Team
            </h2>
            <div className="gold-divider fade-in fade-in-delay-2" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`fade-in fade-in-delay-${(i % 3) + 1}`}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                  <div style={{ width: 220, height: 280, overflow: 'hidden', margin: '0 auto' }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ position: 'absolute', bottom: -8, right: -8, width: '100%', height: '100%', border: '2px solid #C9A84C', zIndex: -1 }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 600, color: '#2C2C2C', marginBottom: '0.25rem' }}>{member.name}</h3>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: '0.75rem' }}>{member.role}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#7A6E6E', lineHeight: 1.7, maxWidth: 260, margin: '0 auto' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
