import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import SectionText from 'components/sectionText'

import { addLang } from 'utils/context'

import { Button, Img } from 'library/index'
import { flex, phone } from 'library/utils'

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
    width: 400px;

    ${phone(css`
      padding: 0 20px;
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

  margin: 160px 0;
  transform: translateY(20px);

  ${phone(css`
    margin: 80px 0;
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
      <Button>
        <Link to={`${language}/portfolio`}>
          Download beta
        </Link>
      </Button>
    </Inner>
    <div className='image'>
      <Img
        file={img}
        alt='portfolio'
      />
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
