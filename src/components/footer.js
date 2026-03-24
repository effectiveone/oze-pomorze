import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--teal-deeper)', padding: '3rem 0 1.5rem', marginTop: '5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>OZE Pomorze</h3>
          <p style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>Aktualności o energii odnawialnej z Wybrzeża i Trójmiasta.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--teal-light)', marginBottom: '0.6rem' }}>Serwis</h4>
          <Link to="/" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '0.35rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--teal-light)', marginBottom: '0.6rem' }}>Partner</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-light)', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>© {year} OZE Pomorze</p>
      </div>
    </footer>
  );
};

export default Footer;
