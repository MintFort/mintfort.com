import React from 'react'
import { Link as GatsbLink } from 'gatsby'

import styled, { css } from 'styled-components'
import { social } from 'siteConfig'

import { Container } from 'library/index'
import { flex, rem, navHeight, theme, phone } from 'library/utils'

const Wrapper = styled.footer`
  ${flex({ x: 'space-between', y: 'center' })}

  padding: 0 ${rem(20)};
  height: calc(${navHeight} * 2);

  width: 100%;
  background: #fff;

  ${phone(css`
    flex-direction: column;
  `)}
`

const linkStyles = css`
  color: ${theme.lightFont};
  padding: ${rem(4)};
`

const Link = styled(GatsbLink)`
  ${linkStyles}
  font-size: ${rem(12)};
`

const ExternalLink = styled.a.attrs({
  href: ({ to }) => to
})`
  ${linkStyles}
  font-size: ${rem(16)};
`

const Section = Container.extend`
  ${phone(css`
    flex-direction: row;
    justify-content: center;
  `)}
`

const icon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const Footer = () => (
  <Wrapper>
    <Section
      size={{ w: '100%', h: '100%' }}
      position={{ x: 'flex-start', y: 'center' }}
    >
      <Link to="/impressum/" activeStyle={{ color: '#fff' }}>
        Impressum
      </Link>
      <Link to="/policy/" activeStyle={{ color: '#fff' }}>
        Privacy Policy
      </Link>
    </Section>
    <Section
      size={{ w: '100%', h: '100%' }}
      position={{ x: 'flex-end', y: 'center' }}
    >
      {social.map(s => (
        <ExternalLink key={s.name} to={s.url}>
          {icon(s.name)}
        </ExternalLink>
      ))}
    </Section>
  </Wrapper>
)

export default Footer
