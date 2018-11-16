import { graphql } from "gatsby"

export const Commons = graphql`
  fragment Hero on ContentfulHero {
    header
    subheader
    description {
      md: childMarkdownRemark {
        html
      }
    }
  }

  fragment Section on ContentfulSection {
    header
    description {
      md: childMarkdownRemark {
        html
      }
    }
  }
`

export const HomePage = graphql`
  fragment HomePage on ContentfulPage {
    hero {
      ...Hero
      image {
        fluid(maxWidth: 340) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    sections {
      name
      ...Section
      images {
        fluid(maxWidth: 675) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    form: formSection {
      header
      buttonText
      sectionText {
        ...Section
      }
    }
    cardsSection {
      cards {
        header
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
    boxSection {
      boxes {
        header
      }
    }
  }
`
