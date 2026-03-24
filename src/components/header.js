import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header>
    <div style={{ background: 'var(--teal-deeper)', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>🌊 OZE Bałtyku i Trójmiasta</span>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--teal-light)', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.06em' }}>AUDYT ENERGETYCZNY ↗</a>
      </div>
    </div>
    <div style={{ background: 'var(--bg)', borderBottom: '3px solid var(--teal)', padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--teal-deeper)', letterSpacing: '-0.01em' }}>OZE <span style={{ color: 'var(--teal)' }}>Pomorze</span></span>
          <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Portal Energetyczny Trójmiasta</span>
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.88rem', textDecoration: 'none' }}>Główna</Link>
          <Link to="/blog" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.88rem', textDecoration: 'none' }}>Artykuły</Link>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'Raleway', sans-serif", background: 'var(--teal)', color: '#fff', padding: '0.4rem 1.1rem', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
            ecoaudyt.app →
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
