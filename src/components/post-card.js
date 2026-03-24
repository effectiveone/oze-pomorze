import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderTop: '3px solid var(--teal)', padding: '1.5rem', transition: 'box-shadow 0.25s' }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(13,148,136,0.1)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', alignItems: 'center' }}>
      {tags && tags[0] && <span style={{ background: 'var(--teal-pale)', color: 'var(--teal-dark)', fontFamily: "'Raleway', sans-serif", fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.55rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tags[0]}</span>}
      <time style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{date}</time>
    </div>
    <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', lineHeight: 1.3, color: 'var(--text)' }}>
      <Link to={`/blog${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--teal)'}
        onMouseLeave={e => e.target.style.color = 'inherit'}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '0.9rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--teal)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>Czytaj artykuł →</Link>
  </article>
);

export default PostCard;
