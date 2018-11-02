import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Container, Header, Paragraph } from 'library/index'
import { phone } from 'library/utils'

const Background = styled.section`
  ${({ color }) => color && color.background && css`
    background: ${({ theme }) => theme[color.background]};
  `}

  ${({ src, theme }) => src && css`
    background: ${src.includes('blue') && theme.blue} url(${require('../' + src)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}

  padding: ${({ padding }) => padding || '14vh 0'};
  display: flex;
  flex-direction: column;
`

const Wrapper = styled(Container)`
  width: 60%;
  text-align: center;

  ${phone(css`
    width: 85%;
  `)}
`

const Text = ({ title, content, color }) => (
  <Container centrate>
    <Wrapper col>
      <Fade>
        <Header
          color={color && color.title}
          style={{ fontWeight: 'bold' }}
        >
          {title}
        </Header>
        <Fade delay={100}>
          {
            typeof content === 'string' ?
              <Paragraph color={color && color.paragraph}>
                {content}
              </Paragraph> :
              content
          }
        </Fade>
      </Fade>
    </Wrapper>
  </Container>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  color: PropTypes.object
}

const SectionText = ({ title, content, background, color, padding }) => (
  <Background
    padding={padding}
    src={background}
    color={color}
  >
    <Text
      title={title}
      content={content}
      color={color}
    />
  </Background>
)

SectionText.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  color: PropTypes.shape({
    background: PropTypes.string,
    paragraph: PropTypes.string,
    title: PropTypes.string
  }),
  background: PropTypes.string,
  padding: PropTypes.string
}


export default SectionText
