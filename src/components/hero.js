import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import styled, { css } from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

import { Container, Title, SubHeader, Img } from 'library/index'
import { hover, rem, transitions, navHeight } from 'library/utils'

import dividerSVG from 'assets/svg/divider.svg'

const HeroImage = ({ backImage }) => (
  <GatsbyImg
    style={{
      width: '100%',
      height: '100vh',
      top: 0,
      zIndex: -1,
      position: 'absolute'
    }}
    imgStyle={{ height: '100vh' }}
    alt='Mintfort hero banner'
    title='Mintfort hero banner'
    backgroundColor={'#fff'}
    fluid={backImage.childImageSharp.fluid}
  />
)

HeroImage.propTypes = {
  backImage: PropTypes.object.isRequired
}

const Wrapper = styled.section`
  min-height: calc(100vh - ${navHeight});
  padding-top: ${navHeight};
  position: relative;
  background: transparent;

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
    <Img
      src={require('../' + img)}
      alt="Hero image"
      draggable='false'
    />
  </div>
)

Image.propTypes = {
  img: PropTypes.string.isRequired
}

const Hero = ({ title, subTitle, body, img }) => (
  <StaticQuery
    query={graphql`
      query {
        backImage: file(relativePath: { eq: "images/hero_background.png"}) {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1021 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ backImage }) => (
      <Wrapper col >
        <HeroImage backImage={backImage}/>
        <Content>
          <Text
            title={title}
            subTitle={subTitle}
            body={body}
          />
          <Image img={img} />
        </Content>
        <Divider size={{ h: rem(80) }}>
          <Img src={dividerSVG} alt="Divider"/>
          <IconWrapper centrate size={{ h: '100%', w: '100%' }}>
            <Icon />
          </IconWrapper>
        </Divider>
      </Wrapper>
    )}
  />
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}


export default Hero
