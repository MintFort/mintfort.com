import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled from 'styled-components'

import { SubHeader, Paragraph } from 'library/index'
import { flex, rem } from 'library/utils'

const medium = ({ title, author, image, uniqueSlug, createdAt, virtuals: { subtitle } }) => {
  const mediumUrl = 'https://medium.com'
  const imgUrl = 'https://cdn-images-1.medium.com/fit/c/50/50'

  return {
    title,
    subtitle,
    url: `${mediumUrl}/mintfort/${uniqueSlug}`,
    image,
    createdAt,
    author: {
      name: author.name,
      url: `${mediumUrl}/@${author.username}`,
      avatar: `${imgUrl}/${author.imageId}`
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto 200px;
  max-width: 800px;
  padding-top: ${({ theme }) => theme.navHeight};
`

const CardWrapper = styled.div`
  ${flex}
  border-bottom: 1px solid lightgray;
  padding: ${rem(24)} 0;
  .content {
    flex: 1;
  }

  .image {
    margin: 0 ${rem(20)};
    width: 240px;
    height: 140px;
    box-shadow: ${({ theme }) => theme.shadow}
  }
`

const Author = ({ author, createdAt }) => (
  <div style={{ display: "flex", marginTop: 20 }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={author.avatar} style={{ borderRadius: '50%', width: 50, height: 50, margin: 0, marginRight: 10 }}/>
    </div>
    <div>
      <a style={{ fontSize: 16 }} href={author.url}>{author.name}</a>
      <div style={{ fontSize: 12 }}>{createdAt}</div>
    </div>
  </div>
)

Author.propTypes = {
  author: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  createdAt: PropTypes.string.isRequired
}

const PostImage = ({ image, url }) => (
  <div className='image'>
    <a href={url}>
      <GatsbyImg
        style={{
          height: '100%'
        }}
        fluid={image.childImageSharp.fluid}
        fixed={image.childImageSharp.fixed}
        alt="Mintfort"
      />
    </a>
  </div>
)

PostImage.propTypes = {
  image: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
}

const Card = ({ data }) => (
  <CardWrapper>
    <div className='content'>
      <SubHeader style={{ margin: '0 0 4px' }}>{data.title}</SubHeader>
      <Paragraph as='a' href={data.url} style={{ color: '#A2A3AB' }}>
        {data.subtitle}
      </Paragraph>
      <Author author={data.author} createdAt={data.createdAt}/>
    </div>
    {data.image && data.image.childImageSharp &&
      <PostImage image={data.image} url={data.url}/>
    }
  </CardWrapper>
)

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    createdAt: PropTypes.string,
    image: PropTypes.object,
    author: PropTypes.object
  }).isRequired
}


const Blog = () => (
  <StaticQuery
    query={query}
    render={({ medium: { edges } }) => (
      <Wrapper>
        {edges.map(({ node }) => (
          <Card data={medium(node)} key={node.id}/>
        ))}
      </Wrapper>
    )}
  />
)

export default Blog

const query = graphql`
  {
    medium: allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
  				uniqueSlug
          createdAt(formatString: "ll")
          image {
            childImageSharp{
              fluid(maxWidth: 300) {
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
