const config = require('./siteConfig')

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        description: config.description,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: `src/assets/mintfort_icon-512x512.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://mintfort.us12.list-manage.com/subscribe/post?u=52c52522e40057472766a9ee3&amp;id=304a96c331"
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache'
  ]
}
