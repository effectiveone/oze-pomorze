module.exports = {
  siteMetadata: {
    title: 'OZE Pomorze',
    description: 'Portal o odnawialnych źródłach energii na Pomorzu i Trójmieście',
    siteUrl: 'https://oze-pomorze.pages.dev',
    author: 'Redakcja OZE Pomorze',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
