module.exports = {
  siteMetadata: {
    title: 'Expertisedag Nieuw Media 2018',
  },
  plugins: ['gatsby-plugin-react-helmet',
            {
              resolve: `gatsby-source-filesystem`,
                options: {
                  name: `src`,
                  path: `${__dirname}/src/content`,
                },
            },
            'gatsby-transformer-remark',
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
            `gatsby-plugin-core-js`
          ]
};
