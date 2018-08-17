import React from 'react'
import PropTypes from 'prop-types'
// import GatsbyImg from 'gatsby-image'
// import { graphql, StaticQuery } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'
import { goToAnchor } from 'react-scrollable-anchor'
import { Button } from 'components/form'
import styled, { css } from 'styled-components'
import { hover, rem, transitions, navHeight, theme, flex, phone } from 'library/utils'

import { Container, Title, SubHeader, Img, Paragraph } from 'library/index'
import heroBackground from 'assets/svg/hero-background.jpg'

const Background = styled.section`
  background: url(${heroBackground});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  height: 100vh;
  padding-top: ${navHeight};
  position: relative;

  display: flex;
  flex-direction: column;
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
  bottom: 30px;
  width: 100%;
  ${flex}
`

const TextWrapper = styled.div`
  flex: 7;
`

const ImageWrapper = styled.div`
  flex: 5;
  padding-right: ${rem(40)};
  ${flex({ x: "flex-end", y: 'flex-start' })}
`

const Text = ({ title, subTitle, body }) => (
  <TextWrapper>
    <SubHeader color={theme.lightFont}>{title}</SubHeader>
    <Title size={70} color="#fff">{subTitle}</Title>
    <Paragraph style={{ color: '#fff' }}>{body}</Paragraph>
    <Button onClick={() => goToAnchor("subscribe")}>Pre-Register</Button>
  </TextWrapper>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

const Image = ({ img, imgSize }) => (
  <ImageWrapper>
    <Img
      width={imgSize}
      src={require('../' + img)}
      alt="Hero image"
      draggable='false'
    />
  </ImageWrapper>
)

Image.propTypes = {
  img: PropTypes.string.isRequired,
  imgSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

const Hero = ({ title, subTitle, body, img, imgSize, scrollId }) => (
  <Background col>
    <Content>
      <Image
        img={img}
        imgSize={imgSize}
      />
      <Text
        title={title}
        subTitle={subTitle}
        body={body}
      />
    </Content>
    <IconWrapper>
      <Icon onClick={() => goToAnchor(scrollId)}/>
    </IconWrapper>
  </Background>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  scrollId: PropTypes.string,
  imgSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Hero

// const HeroImage = ({ backImage }) => (
//   <GatsbyImg
//     style={{
//       width: '100%',
//       height: '100vh',
//       top: 0,
//       position: 'absolute'
//     }}
//     alt='Mintfort hero banner'
//     title='Mintfort hero banner'
//     fluid={backImage.childImageSharp.fluid}
//   />
// )
//
// HeroImage.propTypes = {
//   backImage: PropTypes.object.isRequired
// }



// const Hero = ({ title, subTitle, body, img }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         backImage: file(relativePath: { eq: "images/hero_background.png"}) {
//           childImageSharp {
//             fluid(maxWidth: 2000) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//     `}
//     render={({ backImage }) => (
//       <Wrapper col>
//         <HeroImage backImage={backImage}/>
//         <Inner>
//           <Content>
//             <Text
//               title={title}
//               subTitle={subTitle}
//               body={body}
//             />
//             <Image img={img} />
//           </Content>
//           <Divider fill={theme.blue}>
//             <IconWrapper centrate size={{ h: '100%', w: '100%' }}>
//               <Icon />
//             </IconWrapper>
//           </Divider>
//         </Inner>
//       </Wrapper>
//     )}
//   />
// )
