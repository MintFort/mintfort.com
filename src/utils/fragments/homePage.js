import { graphql } from "gatsby"

export const HomePage = graphql`
  fragment HomePage on ContentfulPage {
    hero {
      header
      subheader
      description {
        md: childMarkdownRemark {
          html
        }
      }
      image {
        fluid(maxWidth: 340) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`
