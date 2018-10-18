import { graphql } from "gatsby"

export const SEOMetadata = graphql`
  fragment SEOMetadata on Site {
    meta: siteMetadata {
      title
      description
      siteUrl
      favicon
      image
      userTwitter
    }
  }
`
