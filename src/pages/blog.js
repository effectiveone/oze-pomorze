import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły OZE Pomorze" description="Artykuły o OZE na Pomorzu i w Trójmieście" siteName="OZE Pomorze" />
      <div className="container" style={{ padding: '3rem 1.5rem 4rem' }}>
        <h1 style={{ fontFamily: "'Raleway', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--teal-deeper)', marginBottom: '0.25rem' }}>Artykuły</h1>
        <p style={{ fontFamily: "'Merriweather', serif", fontWeight: 300, color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>{posts.length} artykułów o energii odnawialnej na Pomorzu</p>
        {posts.length > 0
          ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>{posts.map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}</div>
          : <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '3rem 0' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
