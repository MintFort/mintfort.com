import { graphql } from "gatsby"

export const SEOMetadataFragment = graphql`
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

export const mediumPostFragment = graphql`
  fragment MediumPost on MediumPost {
    id
    title
    uniqueSlug
    createdAt(formatString: "ll")
    image {
      childImageSharp{
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    virtuals {
      subtitle
      previewImage {
        imageId
      }
    }
    author {
      name
      username
      imageId
    }
  }
`
