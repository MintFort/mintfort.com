import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { FaChevronDown } from 'react-icons/fa'
import { goToAnchor } from 'react-scrollable-anchor'
import styled, { css } from 'styled-components'

import StartPageBackground from 'components/backgrounds/pageStart'

import { hover, rem, transitions, navHeight, theme, flex, phone, mobile } from 'library/utils'
import { Container, Title, Header, SubHeader, Img, Button } from 'library/index'

const Wrapper = styled.section`
  height: 100vh;
  padding-top: ${navHeight};
  position: relative;

  display: flex;
  flex-direction: column;

  ${phone(css`
    display: block;
    height: auto;
  `)}
`

const Content = Container.extend`
  padding: ${rem(40)};
  display: flex;
  flex: 1;

  ${phone(css`
    padding: ${rem(30)} ${rem(16)};
    text-align: center;
  `)}
`

const Icon = styled(FaChevronDown)`
  width: ${rem(50)};
  height: ${rem(50)};
  padding: ${rem(8)};
  color: ${theme.blue};
  cursor: pointer;

  ${hover(css`
    transform: scale(1.1)
  `)}

  ${transitions('transform 0.2s ease-in')}
`
const IconWrapper = styled.div`
  position: absolute;
  bottom: ${rem(50)};
  width: 100%;
  ${flex}

  ${phone(css`
    display: none;
  `)}
`

const TextWrapper = styled.div`
  flex: 7;
  padding: ${rem(30)} 0;

  ${mobile(css`
    h1 {
      font-size: ${rem(60)};
    }

    h3 {
      font-size: ${rem(18)};
    }
  `)}

  ${phone(css`
    order: 1;

    h2, h3 {
      font-size: ${rem(16)};
    }
  `)}
`

const ImageWrapper = styled.div`
  flex: 5;
  padding-right: ${rem(40)};
  ${flex({ x: "flex-end", y: 'flex-start' })}

  ${phone(css`
    order: 2;
    transform: translate(32px, -20px);

    ${flex({ x: "center", y: 'flex-start' })};
  `)}
`

const Register = Button.extend`
  ${phone(css`
    margin-bottom: ${rem(40)};
  `)}
`


const Text = ({ title, subTitle, body, button }) => (
  <TextWrapper>
    <Header
      style={{ margin: `0 0 ${rem(20)}` }}
      color={theme.lightFont}
      size={18}
    >
      {title}
    </Header>
    <Title
      style={{ margin: `0 0 ${rem(20)}` }}
      size={72}
      color="#fff"
    >
      {subTitle}
    </Title>
    <SubHeader
      color={theme.lightFont}
      style={{ margin: `0 0 ${rem(8)}`, whiteSpace: 'pre' }}
      size={18}
    >
      {body}
    </SubHeader>
    {
      button && button.length &&
      <Register
        primary
        onClick={() => goToAnchor("subscribe")}
      >
        {button}
      </Register>
    }
  </TextWrapper>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  button: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

const StaticImage = styled.div`
  flex-basis: 600px;
  transform: translateX(-60px) translateY(50px) scale(1.5);

  ${mobile(css`
    transform: none;
  `)}

  transition: all .2s;
`

const Image = ({ img, imgSize }) => (
  <ImageWrapper>
    {typeof img === 'object' ?
      <StaticImage>
        <GatsbyImg
          fluid={img.childImageSharp.fluid}
          alt="Portfolio tracker image"
        />
      </StaticImage> :
      <Img
        width={imgSize}
        src={require('../' + img)}
        alt="Hero image"
        draggable='false'
      />
    }
  </ImageWrapper>
)

Image.propTypes = {
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  imgSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}


const Hero = ({ title, subTitle, body, img, imgSize, scrollId, button }) => (
  <Wrapper col>
    <StartPageBackground style={{ zIndex: "-1" }}/>
    <Content>
      <Image
        img={img}
        imgSize={imgSize}
      />
      <Text
        button={button}
        title={title}
        subTitle={subTitle}
        body={body}
      />
    </Content>
    <IconWrapper>
      <Icon onClick={() => goToAnchor(scrollId)}/>
    </IconWrapper>
  </Wrapper>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  imgSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  scrollId: PropTypes.string,
  button: PropTypes.bool
}

export default Hero
