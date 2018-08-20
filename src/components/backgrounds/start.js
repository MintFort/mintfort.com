import React from 'react'
import GatsbyImg from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

const Divider = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/divider_start_b.png"}) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ image }) => (
      <GatsbyImg
        imgStyle={{
          objectPosition: 'bottom'
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          ...style
        }}
        alt='Background'
        fluid={image.childImageSharp.fluid}
      />
    )}
  />
)

Divider.propTypes = {
  style: PropTypes.object
}

export default Divider
