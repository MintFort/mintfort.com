import React from 'react'
import { Link as GatsbLink } from 'gatsby'

import styled, { css } from 'styled-components'
import { social } from 'siteConfig'

import { Container } from 'library/index'
import { flex, rem, navHeight, theme, phone } from 'library/utils'

const Wrapper = styled.footer`
  ${flex({ x: 'space-between', y: 'center' })}
  flex-direction: column;

  padding: 0 ${rem(20)};
  height: calc(${navHeight} * 2);

  width: 100%;
  background:transparent;

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
    flex-direction: column;
    justify-content: center;
  `)}
`

const Copyright = styled.span`
  text-align: center;
  color: ${theme.lightFont};
  font-size: ${rem(10)};
  margin-bottom: ${rem(4)};
`

const SocialBlock = styled.div`
  order: 2;

  ${phone(css`
    order: 1;
  `)}
`

const LegalBlock = styled.div`
  order: 1;

  ${phone(css`
    order: 12;
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
      position={{ x: 'space-between', y: 'center' }}
    >
      <LegalBlock>
        <Link to="/impressum/" activeStyle={{ color: theme.blue }}>
        Impressum
        </Link>
        <Link to="/policy/" activeStyle={{ color: theme.blue }}>
        Privacy Policy
        </Link>
      </LegalBlock>
      <SocialBlock>
        {social.map(s => (
          <ExternalLink
            key={s.name}
            title={s.name}
            to={s.url}>
            {icon(s.name)}
          </ExternalLink>
        ))}
      </SocialBlock>
    </Section>
    <Copyright>
      © 2018 Mintfort. All rights reserved. Be Your Bank.
    </Copyright>
  </Wrapper>
)

export default Footer
