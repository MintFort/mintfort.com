import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { flex, rem, phone, mobile } from 'library/utils'
import { SubHeader, Paragraph } from 'library/index'

import Author from './author'
import PostImage from './postImage'

const CardWrapper = styled.article`
  ${flex}
  border-bottom: 1px solid lightgray;
  padding: ${rem(24)} 0;

  .content {
    flex: 1;
  }

  ${mobile(css`
    padding: ${rem(24)} ${rem(18)};
  `)}

  ${phone(css`
    flex-direction: column;

    .content {
      order: 2;
    }

  `)}
`

const Header = styled.div`
  cursor: pointer;
`

const Card = ({ data }) => (
  <CardWrapper>
    <div className='content'>
      <Header onClick={() => location.href=data.url}>
        <SubHeader
          size={20}
          style={{ margin: '0 0 4px' }}
        >
          {data.title}
        </SubHeader>
        <Paragraph
          size={15}
          color='lightFont'
        >
          {data.subtitle}
        </Paragraph>
      </Header>
      <Author
        author={data.author}
        createdAt={data.createdAt}
      />
    </div>
    {
      data.image && data.image.childImageSharp &&
      <PostImage
        title={data.title}
        image={data.image}
        url={data.url}
      />
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

export default Card
