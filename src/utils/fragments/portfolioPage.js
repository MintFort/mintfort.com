import { graphql } from "gatsby"

export const PortfolioPage = graphql`
  fragment PortfolioPage on ContentfulPage {
    hero {
      ...Hero
      image {
        fluid(maxWidth: 1350) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`
