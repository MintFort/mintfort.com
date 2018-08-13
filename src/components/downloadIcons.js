import React from 'react'
import PropTypes from 'prop-types'
import { FaApple, FaWindows } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

import { flex, rem, theme, hover } from 'library/utils'
import { Paragraph } from 'library/index'

const Wrapper = styled.div`
  ${flex}
`

const IconWrapper = styled.div`
  ${'' /* border: 1px solid #fff; */}
  border-radius: 50%;

  width: ${rem(80)};
  height: ${rem(80)};

  margin: ${rem(20)} ${rem(30)} ${rem(10)};

  ${flex}
`

const Anchor = styled.a`
  color: #fff;

  ${hover(css`
    color: ${theme.mint};
  `)}

  transition: all .3s ease;
`

const Download = ({ icon: Icon, name, url }) => (
  <Anchor href={url}>
    <IconWrapper>
      <Icon style={{ fontSize: 60 }}/>
    </IconWrapper>
    <Paragraph color="#fff">{name}</Paragraph>
  </Anchor>
)

Download.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const Icons = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          meta: siteMetadata {
            portfolio {
              mac, win
            }
          }
        }
      }
    `}
    render={({ site: { meta: { portfolio } } }) => (
      <Wrapper>
        <Download url={portfolio.mac} icon={FaApple} name='MacOS'/>
        <Download url={portfolio.win} icon={FaWindows} name='Window'/>
      </Wrapper>
    )}
  />
)

export default Icons
