import { graphql } from "gatsby"

export const portfolioPageFragment = graphql`
  fragment PortfolioPage on ContentfulPage {
    hero {
      ...Hero
      image {
        fluid(maxWidth: 1350) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    sections {
      ...Section
      images {
        fluid(maxWidth: 825) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    boxSection {
      header
      boxes {
        name
        link
        image {
          fluid(maxWidth: 540) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`
