import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import SectionText from '../../components/sectionText'

import { addLang } from '../../utils/context/language'

import { Button } from '../../library'
import { flex, phone, rem } from '../../library/utils'

const Wrapper = styled.div`
  position: relative;
  ${flex};
  flex-direction: column;
  margin-top: 10vh;

  ${phone(css`
    background: ${({ theme }) => theme.gray};
  `)}

  transition: all .2s;

  .image {
    width: 500px;

    ${phone(css`
      padding: 0 ${rem(20)};
      width: ${rem(300)};
    `)}
  }
`

const Circle = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;

  border-radius: 100%;
  height: 700px;
  width: 700px;

  background: ${({ theme }) => theme.gray};

  ${phone(css`
    display: none;
  `)}
`

const Inner = styled.div`
  ${flex}
  flex-direction: column;

  margin: ${rem(120)} 0;
  transform: translateY(60px);

  ${phone(css`
    transform: translateY(0);
    margin: ${rem(80)} 0 ${rem(40)};
  `)}
`

const SectionBeta = ({ header, description, language, images }) => (
  <Wrapper>
    <Circle />
    <Inner>
      <SectionText
        header={header}
        description={description}
        padding='0 0 4vh'
      />
      <Button onClick={() => navigate(`${language}/portfolio`)}>
        Download beta
      </Button>
    </Inner>
    <div className='image'>
      <Fade>
        <GatsbyImg
          alt='Portfolio tracker'
          title='Portfolio tracker'
          fluid={images[0].fluid}
        />
      </Fade>
    </div>
  </Wrapper>
)

SectionBeta.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
}

export default props => addLang(SectionBeta, props)
