import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import SectionText from 'components/sectionText'

import { addLang } from 'utils/context'

import { Button, Img } from 'library/index'
import { flex, phone, rem } from 'library/utils'

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

const SectionBeta = ({ title, content, language, img }) => (
  <Wrapper>
    <Circle />
    <Inner>
      <SectionText
        title={title}
        content={content}
        padding='0 0 4vh'
      />
      <Button onClick={() => navigate(`${language}/portfolio`)}>
        Download beta
      </Button>
    </Inner>
    <div className='image'>
      <Fade>
        <Img
          file={img}
          alt='portfolio'
        />
      </Fade>
    </div>
  </Wrapper>
)

SectionBeta.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default props => addLang(SectionBeta, props)
