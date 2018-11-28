import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { flex, rem, mobile } from '../../../styles/utils'
import SectionText from '../../shared/sectionText'

const Wrapper = styled.div`
  ${flex}
  flex-wrap: wrap;
`

const Logo = styled.a`
  flex-basis: 25%;
  margin: ${rem(6)};

  ${mobile(css`
    flex-basis: 45%;
  `)}
`

const Logos = ({ logos }) => (
  <Wrapper>
    {logos.map(logo => (
      <Logo
        key={logo.name}
        href={logo.link}
        title={logo.name}
      >
        <GatsbyImg
          alt={logo.name}
          title={logo.link}
          fluid={logo.image.fluid}
        />
      </Logo>
    ))}
  </Wrapper>
)

Logos.propTypes = {
  logos: PropTypes.array.isRequired
}


const SectionExchanges = ({ header, boxes: logos }) => (
  <SectionText
    header={header}
    description={ <Logos logos={logos}/> }
  />
)

SectionExchanges.propTypes = {
  header: PropTypes.string.isRequired,
  boxes: PropTypes.array.isRequired
}

export default SectionExchanges
