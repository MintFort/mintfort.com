import React from 'react'
import PropTypes from 'prop-types'
import { FaApple, FaWindows } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

import { flex, rem, hover } from '../../library/utils'
import { Paragraph } from '../../library'

const Wrapper = styled.div`
  ${flex}
`

const IconWrapper = styled.div`
  width: ${rem(80)};
  height: ${rem(80)};

  margin: ${rem(20)} ${rem(30)} ${rem(10)};

  ${flex}
`

const Anchor = styled.a`
  color: ${({ theme }) => theme.blue};

  ${hover(css`
    color: ${({ theme }) => theme.mint};
  `)}

  transition: all .3s ease;
`

const Download = ({ icon: Icon, name, url }) => (
  <Anchor href={url}>
    <IconWrapper>
      <Icon style={{ fontSize: 60 }}/>
    </IconWrapper>
    <Paragraph color='blue'>{name}</Paragraph>
  </Anchor>
)

Download.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const Icons = () => (
  <StaticQuery
    query={query}
    render={({ site: { meta: { portfolio } } }) => (
      <Wrapper>
        <Download url={portfolio.mac} icon={FaApple} name='macOS'/>
        <Download url={portfolio.win} icon={FaWindows} name='Windows'/>
      </Wrapper>
    )}
  />
)

export default Icons

const query = graphql`
  {
    site {
      meta: siteMetadata {
        portfolio {
          mac
          win
        }
      }
    }
  }
`
