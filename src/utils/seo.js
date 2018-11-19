import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const SEO = ({ language, pathname }) => (
  <StaticQuery
    query={SITE_DATA}
    render={({
      site: {
        meta: {
          title,
          description,
          siteUrl,
          favicon,
          image,
          userTwitter
        }
      }
    }) => (
      <Helmet
        htmlAttributes={{ lang: language === 'en' ? "en-US" : 'zh' }}
        title={title + ' | Be Your Bank'}
      >
        <link rel="shortcut icon" href={siteUrl + favicon}/>
        <link rel="icon" href={siteUrl + favicon}/>

        <meta name="description" content={description} />
        <meta name="image" content={siteUrl + image} />

        <meta property="og:locale" content={language === 'en' ? "en-US" : 'zh' } />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={siteUrl + pathname} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteUrl + image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="770" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={userTwitter} />
        <meta name="twitter:site" content={userTwitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={siteUrl + pathname} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteUrl + image} />
      </Helmet>
    )}
  />
)

SEO.propTypes = {
  pathname: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

SEO.defaultProps = {
  language: 'en'
}

export default SEO

const SITE_DATA = graphql`
  {
    site {
      ...SEOMetadata
    }
  }
`
