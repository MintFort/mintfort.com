import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from './card'

export const medium = ({ title, author, image, uniqueSlug, createdAt, virtuals: { subtitle } }) => {
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

const Wrapper = styled.section`
  width: 100%;
  margin: 20px auto 200px;
  max-width: 900px;
  padding-top: ${({ theme }) => theme.navHeight};
`

const Blog = ({ posts }) => (
  <Wrapper>
    {posts.map(({ node }) => (
      <Card
        data={medium(node)}
        key={node.id}
      />
    ))}
  </Wrapper>
)

Blog.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Blog
