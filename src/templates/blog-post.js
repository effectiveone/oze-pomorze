import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Pomorze" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 5rem', maxWidth: '800px' }}>
        <Link to="/blog" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2rem', textDecoration: 'none', fontWeight: 500 }}>← Powrót do artykułów</Link>
        {tags && <div style={{ marginBottom: '0.75rem' }}>{tags.map(t => <span key={t} style={{ background: 'var(--teal-pale)', color: 'var(--teal-dark)', fontFamily: "'Raleway', sans-serif", display: 'inline-block', fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.55rem', marginRight: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t}</span>)}</div>}
        <h1 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--teal-deeper)', lineHeight: 1.15, marginBottom: '0.75rem' }}>{title}</h1>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontWeight: 400 }}>{date} · {author}</p>
        {description && <p style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, fontSize: '1rem', color: 'var(--teal-dark)', borderLeft: '4px solid var(--teal)', paddingLeft: '1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>{description}</p>}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
