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
    sections {
      name
      header
      description {
        md: childMarkdownRemark {
          html
        }
      }
      images {
        fluid(maxWidth: 650) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    form: formSection {
      header
      buttonText
      sectionText {
        header
        description {
          md: childMarkdownRemark {
            html
          }
        }
      }
    }
    cardsSection {
      cards {
        header
        image {
          fluid(maxWidth: 650) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
