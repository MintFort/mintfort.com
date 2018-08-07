import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

import { Container, Title, SubHeader, Img } from 'library/index'
import { hover, rem, transitions, navHeight } from 'library/utils'

import dividerSVG from 'assets/svg/divider.svg'
import heroBackground from 'assets/images/hero_background.jpg'

const Background = styled.section`
  background: #eaedf1 url(${heroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: calc(100vh - ${navHeight});

  display: flex;
  flex-direction: column;
`

const Content = Container.extend`
  padding: ${rem(80)} ${rem(60)} 0 ${rem(60)};
  display: flex;
  flex: 1;
`

const Divider = Container.extend`
  height: ${rem(80)};
  position: relative;
`

const IconWrapper = Container.extend`
  position: absolute;
  bottom: 0
`

const Icon = styled(FaChevronDown)`
  width: ${rem(40)};
  height: ${rem(40)};
  padding: ${rem(8)};

  color: #fff;
  cursor: pointer;

  ${hover(css`
    transform: scale(1.1)
  `)}

  ${transitions('transform 0.2s ease-in')}
`

const Text = ({ title, subTitle, body }) => (
  <div style={{ flex: 1 }}>
    <SubHeader>{title}</SubHeader>
    <Title size={70}>{subTitle}</Title>
    <p>{body}</p>
  </div>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

const Image = ({ img }) => (
  <div style={{ flex: 1 }}>
    <Img src={require('../' + img)} alt="<>" />
  </div>
)

Image.propTypes = {
  img: PropTypes.string.isRequired
}

const Hero = ({ title, subTitle, body, img }) => (
  <Background col>
    <Content>
      <Text
        title={title}
        subTitle={subTitle}
        body={body}
      />
      <Image img={img} />
    </Content>
    <Divider size={{ h: rem(80) }}>
      <Img src={dividerSVG} height='%' alt="<>"/>
      <IconWrapper centrate size={{ h: '100%', w: '100%' }}>
        <Icon />
      </IconWrapper>
    </Divider>
  </Background>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}


export default Hero
