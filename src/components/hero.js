import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { FaChevronDown } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { scroller } from 'react-scroll'

import StartPageBackground from '../components/backgrounds/pageStart'

import { hover, rem, transitions, flex, phone, mobile } from '../styles/utils'
import { Container, Title, Header, SubHeader, Button } from '../styles'

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

  ${({ id }) => id === 'home' && css`
    cursor: pointer;
  `}

  ${phone(css`
    transform: none;
    min-width: 320px;

    ${({ id }) => id === 'home' && css`
      transform: translateX(14px);
    `}
  `)}

  transition: transform .2s ease-in;
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

  p {
    margin: 0
  }
`

const Text = ({ subHeader, header, description, button }) => (
  <TextWrapper>
    <Header
      style={{ margin: `0 0 ${rem(20)}` }}
      color='lightFont'
      size={18}
    >
      {subHeader}
    </Header>
    <Title
      style={{ margin: `0 0 ${rem(20)}` }}
      size={72}
      color="#fff"
    >
      {header}
    </Title>
    <Sub
      style={{ margin: `0 0 ${rem(8)}` }}
      size={18}
    >
      {description.md.rawMarkdownBody}
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
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  button: PropTypes.string,
  description: PropTypes.object.isRequired
}

const Image = ({ image, id }) => (
  <ImageWrapper id={id}>
    <StaticImage id={id}>
      <div
        onClick={() => id === 'home' && scrollToForm()}
      >
        <GatsbyImg
          fluid={image.fluid}
          alt={`${id} application`}
        />
      </div>
    </StaticImage>
  </ImageWrapper>
)

Image.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

const Hero = ({ subHeader, content, image, scrollId, buttonText, id }) => (
  <Wrapper>
    <StartPageBackground />
    <Content>
      <Image
        id={id}
        image={image}
      />
      <Text
        header={content.header}
        subHeader={subHeader}
        description={content.description}
        button={buttonText}
      />
    </Content>
    <IconWrapper>
      <Icon
        onClick={() => scroller.scrollTo(scrollId, {
          duration: 1000,
          smooth: "easeOutQuint",
          offset: -40
        })}
      />
    </IconWrapper>
  </Wrapper>
)

Hero.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.shape({
    header: PropTypes.string,
    description: PropTypes.object
  }).isRequired,
  image: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  scrollId: PropTypes.string,
  buttonText: PropTypes.string
}

export default Hero
