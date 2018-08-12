import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import data from 'siteConfig'

// const formatPath = str => {
//   str = str.replace(/\//g, '')
//   return str[2].toUpperCase() + str.slice(3)
// }

const SEO = ({ language }) => (
  <Helmet
    htmlAttributes={{ lang: language === 'en' ? "en-US" : 'zh' }}
    title={data.title + ' | Be Your Bank'}
  >
    <link rel="shortcut icon" href={data.siteUrl + data.favicon}/>
    <link rel="icon" href={data.siteUrl + data.favicon}/>

    <meta name="description" content={data.description} />
    <meta name="image" content={data.siteUrl + data.image} />

    <meta property="og:locale" content={language === 'en' ? "en-US" : 'zh' } />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={data.title} />
    <meta property="og:title" content={data.title} />
    <meta property="og:url" content={data.siteUrl} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content={data.siteUrl + data.image} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="870" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={data.userTwitter} />
    <meta name="twitter:site" content={data.userTwitter} />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:url" content={data.siteUrl} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content={data.siteUrl + data.image} />
  </Helmet>
)

SEO.propTypes = {
  path: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}


export default SEO
