import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = [
  {
    icon: '✂',
    title: 'Hair',
    subtitle: 'Cuts, Color & Styling',
    color: '#F4B8C1',
    services: [
      { name: "Women's Haircut", price: '$85+', desc: 'Precision cut tailored to your face shape and lifestyle' },
      { name: "Men's Haircut", price: '$55+', desc: 'Clean, refined cuts with expert styling' },
      { name: 'Full Color', price: '$145+', desc: 'Single-process color with a glossy finish' },
      { name: 'Highlights / Balayage', price: '$195+', desc: 'Sun-kissed, lived-in color by master colorists' },
      { name: 'Keratin Treatment', price: '$250+', desc: 'Frizz-free, silky smooth hair for up to 5 months' },
      { name: 'Blowout & Style', price: '$65+', desc: 'Volumizing blowout or sleek salon-finish style' },
    ],
  },
  {
    icon: '💅',
    title: 'Nails',
    subtitle: 'Manicure, Pedicure & Art',
    color: '#F4B8C1',
    services: [
      { name: 'Classic Manicure', price: '$45+', desc: 'Shape, buff, cuticle care and polish' },
      { name: 'Gel Manicure', price: '$65+', desc: 'Long-lasting gel polish with high shine finish' },
      { name: 'Acrylic Full Set', price: '$85+', desc: 'Durable acrylic extensions in any length' },
      { name: 'Classic Pedicure', price: '$60+', desc: 'Soak, exfoliate, massage and polish' },
      { name: 'Spa Pedicure', price: '$85+', desc: 'Luxurious treatment with paraffin wax and massage' },
      { name: 'Nail Art', price: '$25+', desc: 'Bespoke designs from minimalist to editorial' },
    ],
  },
  {
    icon: '✨',
    title: 'Skin & Facials',
    subtitle: 'Rejuvenation & Glow',
    color: '#F4B8C1',
    services: [
      { name: 'Signature Facial', price: '$120+', desc: 'Customized 60-min facial for your skin type' },
      { name: 'HydraFacial', price: '$195+', desc: 'Medical-grade cleansing, extraction and hydration' },
      { name: 'Anti-Aging Facial', price: '$165+', desc: 'Targets fine lines, wrinkles and loss of elasticity' },
      { name: 'Chemical Peel', price: '$145+', desc: 'Resurface and brighten for luminous skin' },
      { name: 'LED Light Therapy', price: '$80+', desc: 'Non-invasive treatment for acne and rejuvenation' },
      { name: 'Microdermabrasion', price: '$130+', desc: 'Exfoliating treatment for a polished, smooth complexion' },
    ],
  },
  {
    icon: '💄',
    title: 'Makeup & Bridal',
    subtitle: 'Artistry for Every Occasion',
    color: '#F4B8C1',
    services: [
      { name: 'Bridal Makeup', price: '$300+', desc: 'Flawless, all-day bridal artistry with a trial session' },
      { name: 'Event Makeup', price: '$150+', desc: 'Glamorous looks for galas, parties and photoshoots' },
      { name: 'Airbrush Makeup', price: '$185+', desc: 'Seamless, skin-like finish for the camera' },
      { name: 'Bridal Party', price: '$120+ /pp', desc: 'Coordinated looks for your entire bridal party' },
      { name: 'Lash Extensions', price: '$175+', desc: 'Volume or classic lashes for instantly lifted eyes' },
      { name: 'Makeup Lesson', price: '$95+', desc: '1-on-1 lesson tailored to your features and skill level' },
    ],
  },
]

export default function Services() {
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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Our Menu</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FDFAF9', marginBottom: '1rem', lineHeight: 1.1 }}>
            Services & Pricing
          </h1>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: 'rgba(253,250,249,0.7)', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            Every service is an experience — meticulously crafted to exceed your expectations.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <div style={{ backgroundColor: '#FDFAF9' }}>
        {categories.map((cat, ci) => (
          <section
            key={cat.title}
            className="section-padding"
            style={{ backgroundColor: ci % 2 === 0 ? '#FDFAF9' : '#FAE0E4' }}
          >
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              {/* Category Header */}
              <div className="fade-in" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: 70, height: 70,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #C9A84C, #E2C97A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', flexShrink: 0,
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 600, color: '#2C2C2C', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                    {cat.title}
                  </h2>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Service Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                {cat.services.map((svc, si) => (
                  <div
                    key={svc.name}
                    className={`fade-in fade-in-delay-${(si % 3) + 1}`}
                    style={{
                      backgroundColor: ci % 2 === 0 ? '#FAE0E4' : '#FDFAF9',
                      padding: '1.75rem',
                      borderLeft: '3px solid #C9A84C',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '4px 4px 20px rgba(201,168,76,0.12)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '1rem' }}>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 600, color: '#2C2C2C' }}>{svc.name}</h3>
                      <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#C9A84C', whiteSpace: 'nowrap' }}>{svc.price}</span>
                    </div>
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.85rem', color: '#7A6E6E', lineHeight: 1.6 }}>{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Book CTA */}
      <section style={{ backgroundColor: '#2C2C2C', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <p className="fade-in" style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Ready?</p>
        <h2 className="fade-in fade-in-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#FDFAF9', marginBottom: '2rem', lineHeight: 1.2 }}>
          Reserve Your Appointment
        </h2>
        <Link to="/book">
          <button className="btn-primary fade-in fade-in-delay-2">Book Now</button>
        </Link>
      </section>
    </div>
  )
}
