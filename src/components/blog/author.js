import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { rem } from 'library/utils'

const AuthorWrapper = styled.div`
  display: flex;
  margin-top: ${rem(18)};

  .avatar-wrapper {
    display: flex;
    align-items: center;

    img {
      width: ${rem(46)};
      height: ${rem(46)};
      border-radius: 50%;

      margin: 0;
      margin-right: ${rem(8)};
    }
  }

  .created {
    font-size: ${rem(10)};
  }

  a {
    font-size: ${rem(14)};
  }

`

const Author = ({ author, createdAt }) => (
  <AuthorWrapper>
    <div className='avatar-wrapper'>
      <img src={author.avatar} alt={author.name}/>
    </div>
    <div>
      <a href={author.url}>{author.name}</a>
      <div className='created'>{createdAt}</div>
    </div>
  </AuthorWrapper>
)

Author.propTypes = {
  author: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  createdAt: PropTypes.string.isRequired
}

export default Author
