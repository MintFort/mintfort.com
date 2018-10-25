import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const medium = data => {
  const mediumUrl = 'https://medium.com'
  const imgUrl = 'https://cdn-images-1.medium.com/max'

  const { title, author, image, uniqueSlug, createdAt, virtuals: { subtitle } } = data

  return {
    title,
    subtitle,
    url: `${mediumUrl}/mintfort/${uniqueSlug}`,
    image,
    createdAt,
    author: {
      name: author.name,
      url: `${mediumUrl}/@${author.username}`,
      avatar: `${imgUrl}/100/${author.imageId}`
    }
  }
}

const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.navHeight};
`

const Blog = () => (
  <StaticQuery
    query={query}
    render={({ medium: { edges } }) => (
      <Wrapper>
        {edges.map(({ node }) => console.log(medium(node).image)||(
          <div key={node.id}>
            <pre >{JSON.stringify(medium(node), null, 2)}</pre>
            {medium(node).image && medium(node).image.childImageSharp &&
              <Img
                style={{ maxWidth: 1000 }}
                fluid={medium(node).image.childImageSharp.fluid}
                alt="Portfolio tracker"
              />
            }
          </div>
        ))}
      </Wrapper>
    )}
  />
)

Blog.propTypes = {
  location: PropTypes.object.isRequired
}

export default Blog

const query = graphql`
{
    medium: allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
  				uniqueSlug
          createdAt(fromNow:true)
          image {
            childImageSharp{
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
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
      }
    }
  }
`
