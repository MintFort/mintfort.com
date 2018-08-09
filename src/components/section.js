import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Container, Header, Paragraph, Img } from 'library/index'
import { rem } from 'library/utils'

const Background = styled.section`
  ${({ src }) => src && css`
    background: url(${require('../' + src)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}

  padding: 10vh 0;
  display: flex;
  flex-direction: column;
`

const Wrapper = Container.extend`
  width: 60%;
  text-align: center;
`

const Text = ({ title, subTitle, color }) => (
  <Container centrate>
    <Wrapper col>
      <Header color={color.header}>{title}</Header>
      <Paragraph color={color.paragraph}>{subTitle}</Paragraph>
    </Wrapper>
  </Container>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired
}

const Image = ({ src }) => (
  <Container centrate style={{ marginTop: rem(40) }}>
    <Wrapper col>
      <Img
        src={require('../' + src)}
        alt="Hero image"
        draggable='false'
      />
    </Wrapper>
  </Container>
)

Image.propTypes = {
  src: PropTypes.string.isRequired
}

const Section = ({ title, subTitle, background, img, color }) => (
  <Background src={background}>
    <Text
      title={title}
      subTitle={subTitle}
      color={color}
    />
    {img && <Image src={img} />}
  </Background>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  background: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.object
}


export default Section
