import { graphql } from "gatsby"

export const PortfolioPage = graphql`
  fragment PortfolioPage on ContentfulPage {
    hero {
      header
      subheader
      description {
        md: childMarkdownRemark {
          html
        }
      }
      image {
        fluid(maxWidth: 1350) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`
