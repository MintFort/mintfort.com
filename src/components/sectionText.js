import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Container, Header, Paragraph } from '../library'
import { phone } from '../library/utils'

const Background = styled.section`
  ${({ color }) => color && color.background && css`
    background: ${({ theme }) => theme[color.background]};
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

const Text = ({ header, description, color }) => (
  <Container centrate>
    <Wrapper col>
      <Fade>
        <Header
          color={color && color.title}
          style={{ fontWeight: 'bold' }}
        >
          {header}
        </Header>
        <Fade delay={100}>
          {
            description.md ?
              <Paragraph
                color={color && color.paragraph}
                dangerouslySetInnerHTML={{ __html: description.md.html }}
              /> :
              description
          }
        </Fade>
      </Fade>
    </Wrapper>
  </Container>
)

Text.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  color: PropTypes.object
}

const SectionText = ({ header, description, color, padding }) => (
  <Background
    padding={padding}
    color={color}
  >
    <Text
      header={header}
      description={description}
      color={color}
    />
  </Background>
)

SectionText.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  color: PropTypes.shape({
    background: PropTypes.string,
    paragraph: PropTypes.string,
    title: PropTypes.string
  }),
  padding: PropTypes.string
}


export default SectionText
