import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Hair styling', cat: 'Hair', span: 'tall' },
  { id: 2, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', alt: 'Salon interior', cat: 'Interior', span: 'normal' },
  { id: 3, src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Makeup artistry', cat: 'Makeup', span: 'normal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', alt: 'Nail art', cat: 'Nails', span: 'normal' },
  { id: 5, src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80', alt: 'Hair color', cat: 'Hair', span: 'wide' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80', alt: 'Facial treatment', cat: 'Skin', span: 'normal' },
  { id: 7, src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80', alt: 'Bridal makeup', cat: 'Makeup', span: 'tall' },
  { id: 8, src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', alt: 'Hair blow dry', cat: 'Hair', span: 'normal' },
  { id: 9, src: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&q=80', alt: 'Nail manicure', cat: 'Nails', span: 'normal' },
  { id: 10, src: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=600&q=80', alt: 'Skin care', cat: 'Skin', span: 'normal' },
  { id: 11, src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', alt: 'Hair cut', cat: 'Hair', span: 'wide' },
  { id: 12, src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=600&q=80', alt: 'Beauty treatment', cat: 'Skin', span: 'normal' },
]

const categories = ['All', 'Hair', 'Nails', 'Skin', 'Makeup', 'Interior']

export default function Gallery() {
  useScrollAnimation()
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.cat === active)

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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem', fontWeight: 700 }}>Our Work</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FDFAF9', marginBottom: '1rem', lineHeight: 1.1 }}>
            The Gallery
          </h1>
          <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: 'rgba(253,250,249,0.7)', maxWidth: 500, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}>
            A visual celebration of artistry, transformation, and beauty.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ backgroundColor: '#FDFAF9', padding: '2.5rem 1.5rem 0', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 700,
                padding: '0.6rem 1.5rem',
                border: `1px solid ${active === c ? '#C9A84C' : '#ddd'}`,
                background: active === c ? '#C9A84C' : 'transparent',
                color: active === c ? '#fff' : '#7A6E6E',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ backgroundColor: '#FDFAF9', padding: '2.5rem 1.5rem 5rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          columns: '3 300px',
          columnGap: '1rem',
        }}>
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightbox(photo)}
              style={{
                breakInside: 'avoid',
                marginBottom: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                display: 'block',
              }}
              className="gallery-item"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(44,44,44,0.8) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex', alignItems: 'flex-end', padding: '1.25rem',
              }} className="gallery-overlay">
                <div>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#FDFAF9', fontStyle: 'italic', marginBottom: '0.25rem' }}>{photo.alt}</p>
                  <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>{photo.cat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'none', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', width: 40, height: 40, borderRadius: '50%',
              cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', textAlign: 'center' }}>
            <img src={lightbox.src.replace('w=600', 'w=1200')} alt={lightbox.alt} style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain' }} />
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#FDFAF9', marginTop: '1rem', fontSize: '1rem' }}>{lightbox.alt}</p>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginTop: '0.25rem' }}>{lightbox.cat}</p>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover img { transform: scale(1.04); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  )
}
