import React from 'react'
import { Link } from 'gatsby'

import styled, { css } from 'styled-components'
import { social } from 'siteConfig'

import { Container } from 'library/index'
import { flex, rem, navHeight, theme, phone } from 'library/utils'

const Wrapper = styled.footer`
  ${flex({ x: 'space-between', y: 'center' })}

  padding: 0 ${rem(20)};
  height: calc(${navHeight} * 2);

  width: 100%;
  background: ${theme.blue};

  ${phone(css`
    flex-direction: column;
  `)}
`

const icon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const StyledLink = styled(Link)`
  color: ${theme.lightFont};
  padding: ${rem(4)};
  font-size: ${({ icon }) => icon ? rem(16) : rem(12)};
`

const Section = Container.extend`
  ${phone(css`
    flex-direction: row;
    justify-content: center;
  `)}
`

const Footer = () => (
  <Wrapper>
    <Section
      size={{ w: '100%', h: '100%' }}
      position={{ x: 'flex-start', y: 'center' }}
    >
      <StyledLink
        to="/impressum"
        activeStyle={{ color: '#fff' }}
      >
        Impressum
      </StyledLink>
      <StyledLink
        to="/policy"
        activeStyle={{ color: '#fff' }}
      >
        Privacy Policy
      </StyledLink>
    </Section>
    <Section
      size={{ w: '100%', h: '100%' }}
      position={{ x: 'flex-end', y: 'center' }}
    >
      {social.map(s => (
        <StyledLink
          icon
          key={s.name}
          to={s.url}>{icon(s.name)}
        </StyledLink>
      ))}
    </Section>
  </Wrapper>
)

export default Footer
