import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { FaChevronDown } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { scroller } from 'react-scroll'

import StartPageBackground from 'components/backgrounds/pageStart'

import { hover, rem, transitions, flex, phone, mobile } from 'library/utils'
import { Container, Title, Header, SubHeader, Button } from 'library/index'

const scrollToForm = () => scroller.scrollTo("subscribe", {
  smooth: true,
  duration: 600,
  offset: -120
})

const Wrapper = styled.section`
  height: 100vh;
  padding-top: ${({ theme }) => theme.navHeight};
  position: relative;

  display: flex;
  flex-direction: column;

  ${phone(css`
    display: block;
    height: auto;
  `)}
`

const Content = styled(Container)`
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
  color: ${({ theme }) => theme.blue};
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
      font-size: ${rem(52)};
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
  min-width: 200px;

  ${mobile(css`
    padding: 0;
    flex: 7;
  `)}

  ${phone(css`
    order: 2;
    padding-right: 0;

    ${flex({ x: "center", y: 'flex-start' })};

  `)}

`

const StaticImage = styled.div`
  min-width: 340px;

  ${({ id }) => id === 'portfolio' && css`
    min-width: 600px;
    transform: translateX(-60px) translateY(50px) scale(1.5);

    ${mobile(css`
      transform: translateX(-100px) translateY(50px) scale(1.5);
    `)}
  `}

  ${phone(css`
    transform: none;
    min-width: 320px;

    ${({ id }) => id === 'home' && css`
      transform: translateX(14px);
    `}
  `)}

  transition: all .2s;
`

export const EarlyAccess = styled(Button)`
  margin-top: ${rem(30)};

  ${phone(css`
    margin-bottom: ${rem(40)};
  `)}
`

const Sub = styled(SubHeader)`
  white-space: pre-line;
  color: ${({ theme }) => theme.lightFont};

  ${mobile(css`
    white-space: normal;
  `)}
`

const Text = ({ title, subTitle, body, button }) => (
  <TextWrapper>
    <Header
      style={{ margin: `0 0 ${rem(20)}` }}
      color='lightFont'
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
    <Sub
      style={{ margin: `0 0 ${rem(8)}` }}
      size={18}
    >
      {body}
    </Sub>
    {
      button && button.length &&
      <EarlyAccess
        mint
        onClick={() => scrollToForm()}
      >
        {button}
      </EarlyAccess>
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

const Image = ({ img, id }) => (
  <ImageWrapper id={id}>
    <StaticImage id={id}>
      <div
        onClick={() => id === 'home' && scrollToForm()}
      >
        <GatsbyImg
          fluid={img.childImageSharp.fluid}
          alt={`${id} application`}
        />
      </div>
    </StaticImage>
  </ImageWrapper>
)

Image.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired
}


const Hero = ({ title, subTitle, body, img, scrollId, button, id }) => (
  <Wrapper>
    <StartPageBackground />
    <Content>
      <Image
        id={id}
        img={img}
      />
      <Text
        button={button}
        title={title}
        subTitle={subTitle}
        body={body}
      />
    </Content>
    <IconWrapper>
      <Icon
        onClick={() => scroller.scrollTo(scrollId, {
          duration: 1000,
          smooth: "easeOutQuint",
          offset: -40 })}
      />
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
  img: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  scrollId: PropTypes.string,
  button: PropTypes.string
}

export default Hero
