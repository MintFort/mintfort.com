require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./siteConfig')

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        description: config.description,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: `src/assets/mintfort_icon-512x512.png`
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: config.userMedium
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
        name: 'images',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/library/typography.js`
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
        endpoint: process.env.MAIL
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/sw.js": [
            "Cache-Control: no-cache"
          ]
        }
      }
    },
    'gatsby-plugin-netlify-cache'
  ]
}
