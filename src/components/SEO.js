import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import data from '../../siteConfig'

const formatPath = str => str[1].toUpperCase() + str.slice(2)

const SEO = props => (
  <Helmet
    htmlAttributes={{ lang: props.lang || "en-US" }}
    title={`${data.title}${props.path.length > 1 ? ` | ${formatPath(props.path)}` : ''}`}
  >
    <link rel="shortcut icon" href={data.siteUrl + data.favicon}/>
    <link rel="icon" href={data.siteUrl + data.favicon}/>

    <meta name="description" content={data.description} />
    <meta name="image" content={data.siteUrl + data.image} />

    <meta property="og:locale" content={props.lang || "en-US"} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={data.title} />
    <meta property="og:title" content={data.title} />
    <meta property="og:url" content={data.siteUrl + props.path} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content={data.siteUrl + data.image} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="870" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={data.userTwitter} />
    <meta name="twitter:site" content={data.userTwitter} />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:url" content={data.siteUrl + props.path} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content={data.siteUrl + data.image} />
  </Helmet>
)

SEO.propTypes = {
  path: PropTypes.string,
  lang: PropTypes.string
}


export default SEO
