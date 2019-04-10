import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { withLanguage } from '../utils/context/language'

const schemaOrgJSONLD = ({ logo, siteUrl }) => ({
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "Mintfort",
  legalName: "Petzka, Weber, Schuster GbR",
  url: siteUrl,
  logo: siteUrl + logo,
  foundingDate: "2018",
  founders: [
    {
      "@type": "Person",
      name: "Moritz Schuster"
    },
    {
      "@type": "Person",
      name: "Philipp Petzka"
    },
    {
      "@type": "Person",
      name: "Oliver Weber"
    }
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Hildegard-Marcusson-Str. 23",
      addressLocality: "Berlin",
      addressRegion: "Berlin",
      postalCode: "10317",
      addressCountry: "Germany"
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Rm 1402, 14/F, Hip Kwan Commercial Bldg., 38 Pitt St.",
      addressLocality: "Yau Ma Tei",
      addressRegion: "Kowloon",
      addressCountry: "HongKong"
    }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Contact",
    email: "info@mintfort.com"
  },
  sameAs: [
    "https://twitter.com/mintfort",
    "https://github.com/MintFort",
    "https://www.facebook.com/mintfortbank/",
    "https://www.linkedin.com/company/mintfort/",
    "https://angel.co/mintfort"
  ]
})

const SEO = ({ language, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        meta: {
          title,
          description,
          siteUrl,
          logo,
          image,
          userTwitter
        }
      }
    }) => (
      <Helmet
        htmlAttributes={{ lang: language === 'en' ? "en-US" : 'zh' }}
        title={title + ' | Be Your Bank'}
      >
        <meta name="description" content={description} />
        <meta name="image" content={siteUrl + image} />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD({ logo, siteUrl }))}
        </script>

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

export default withLanguage(SEO)

const query = graphql`
  query SEO_QUERY {
    site {
      ...SEOMetadata
    }
  }
`
