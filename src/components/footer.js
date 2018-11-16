import React from 'react'
import { Link as GatsbLink, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

import { Container } from 'library'
import { theme } from 'library/global'
import { flex, rem, phone } from 'library/utils'

const Wrapper = styled.footer`
  ${flex({ x: 'space-between', y: 'center' })}
  flex-direction: column;

  padding: 0 ${rem(20)} ${rem(10)};
  height: ${({ theme }) => `calc(${theme.navHeight} * 2)`};

  width: 100%;
  background: ${({ path, theme }) => (path && path.includes('portfolio') && theme.blue) || '#fff'};

  ${phone(css`
    flex-direction: column;
  `)}
`

const linkStyles = css`
  color: ${({ theme }) => theme.lightFont};
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

const Section = styled(Container)`
  ${phone(css`
    flex-direction: column;
    justify-content: center;
  `)}
`

const Copyright = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.lightFont};
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

const Footer = ({ path }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta: { copyright, social, nav } } }) => (
      <Wrapper path={path}>
        <Section
          size={{ w: '100%', h: '100%' }}
          position={{ x: 'space-between', y: 'center' }}
        >
          <LegalBlock>
            {nav.map(({ name, path, section }) => section === 'footer' && (
              <Link
                key={name}
                to={path}
                activeStyle={{ color: theme.blue }}
              >
                {name}
              </Link>
            ))}
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
          {copyright}
        </Copyright>
      </Wrapper>
    )}
  />
)

Footer.propTypes = {
  path: PropTypes.string
}

export default Footer

const query = graphql`
  {
    site {
      meta: siteMetadata {
        copyright
        social {
          name
          url
        }
        nav {
          name
          path
          section
        }
      }
    }
  }
`
