import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="OZE Pomorze — Portal Trójmiasta" description="Energia odnawialna na Pomorzu" siteName="OZE Pomorze" />
      <section style={{ background: 'linear-gradient(160deg, var(--teal-deeper) 0%, var(--teal-dark) 50%, var(--teal) 100%)', padding: '5rem 0', borderBottom: '3px solid var(--teal)' }}>
        <div className="container">
          <p style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--teal-light)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>🌊 Portal Energetyczny Wybrzeża</p>
          <h1 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#fff', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
            OZE na Pomorzu<br/>i Trójmieście
          </h1>
          <p style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', maxWidth: '520px', marginBottom: '2rem', lineHeight: 1.8 }}>
            Wiatr morski, fotowoltaika, transformacja energetyczna nadmorskiego regionu. Aktualne informacje dla mieszkańców Wybrzeża.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/blog" style={{ background: '#fff', color: 'var(--teal-dark)', padding: '0.7rem 1.75rem', fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>Czytaj artykuły</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '0.7rem 1.75rem', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>Audyt energetyczny →</a>
          </div>
        </div>
      </section>
      <div className="container" style={{ padding: '3rem 1.5rem 4rem' }}>
        {posts.length > 0 ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: 'var(--teal-deeper)' }}>Najnowsze artykuły</h2>
              <Link to="/blog" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--teal)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>Wszystkie artykuły →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {posts.slice(0, 6).map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
            </div>
            {posts.length > 6 && <div style={{ textAlign: 'center' }}><Link to="/blog" style={{ border: '2px solid var(--teal)', color: 'var(--teal)', padding: '0.6rem 1.5rem', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-block' }}>Wszystkie artykuły ({posts.length}) →</Link></div>}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <span style={{ fontSize: '3rem' }}>🌊</span>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '2rem', color: 'var(--teal-dark)', marginTop: '1rem' }}>Artykuły wkrótce</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Przygotowujemy treści o OZE na Pomorzu.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 180) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
