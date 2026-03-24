import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌊</span>
    <h1 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '5rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: '-0.03em' }}>404</h1>
    <p style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '1rem' }}>Ta strona odpłynęła.</p>
    <Link to="/" style={{ marginTop: '1.5rem', fontFamily: "'Raleway', sans-serif", color: 'var(--teal-dark)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>← Wróć na stronę główną</Link>
  </div>
);

export default NotFound;
