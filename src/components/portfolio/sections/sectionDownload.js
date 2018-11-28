import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { FaApple, FaWindows } from 'react-icons/fa'

import SectionText from '../../shared/sectionText'
import Divider from '../../backgrounds/start'
import { phone, mobile, flex, rem, hover } from '../../../styles/utils'
import { Paragraph } from '../../../styles'

const DividerWrapper = styled.div`
  position: relative;
  height: 230px;

  ${mobile(css`
    height: 180px;
  `)}

  ${phone(css`
    height: 120px;
  `)}

  transition: all .2s;
`

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
    render={({ mac, win }) => (
      <Wrapper>
        <Download url={mac.link} icon={FaApple} name='macOS'/>
        <Download url={win.link} icon={FaWindows} name='Windows'/>
      </Wrapper>
    )}
  />
)

const SectionDownload = ({ header }) => (
  <div id={"download"}>
    <SectionText
      header={header}
      description={<Icons />}
      padding='6vh 0'
      color={{
        background: 'transparent'
      }}
    />
    <DividerWrapper>
      <Divider diagonal='hard'/>
    </DividerWrapper>
  </div>
)

SectionDownload.propTypes = {
  header: PropTypes.string.isRequired
}

export default SectionDownload

const query = graphql`
  query PORTFOLIO_QUERY {
    mac: contentfulExternalLinks(
      name: { regex: "/mac/i" },
      node_locale: { regex: "/en/" }
    ) {
      link
    }
    win: contentfulExternalLinks(
      name: { regex: "/win/i" },
      node_locale: { regex: "/en/" }
    ) {
      link
    }
  }
`
