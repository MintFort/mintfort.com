import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, navigate } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { medium } from '../../components/blog'
import { rem, phone, mobile, hover, flex } from '../../styles/utils'
import { Header, SubHeader, Paragraph } from '../../styles'

const Wrapper = styled.section`
  ${flex}
  flex-direction: column;
  padding: ${rem(60)} 0 0;

  .content {
    display: flex;
    margin-top: ${rem(40)};

    ${phone(css`
      padding: 0 ${rem(12)};
      flex-direction: column;
    `)}
  }

  p {
    ${hover(css`
      cursor: pointer;
      color: ${({ theme }) => theme.mint}
    `)}
  }
`

const Inner = styled.div`
  ${flex}
  flex-direction: column;
  max-width: 1300px;
`

const ImageWrapper = styled.div`
  height: ${rem(180)};
  box-shadow: ${({ theme }) => theme.shadow};

  ${phone(css`
    width: 100%;
    height: ${rem(140)};
    margin: 0 0 ${rem(16)};
  `)}
`

const CardWrapper = styled.div`
  flex: 1;
  margin: 0 ${rem(18)};

  .title {
    margin-top: ${rem(16)};
    transition: all .2s;
  }

  ${hover(css`
    cursor: pointer;

    .title {
      color: ${({ theme }) => theme.mint};
      opacity: 0.8;
    }
  `)}

  ${mobile(css`
    margin: 0 ${rem(8)};
  `)}

  ${phone(css`
    margin-bottom: ${rem(30)};
    text-align: center;

    .title {
      margin-top: 0;
    }
  `)}
`

const PostImage = ({ image, title }) => (
  <ImageWrapper >
    <GatsbyImg
      style={{ height: '100%' }}
      fluid={image.childImageSharp.fluid}
      alt={title}
    />
  </ImageWrapper>
)

PostImage.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

const Card = ({ placeholder, data }) => (
  <CardWrapper
    onClick={() => window.location.href=data.url}
  >
    <PostImage
      title={data.title}
      image={data.image && data.image.childImageSharp ? data.image : placeholder}
    />
    <SubHeader
      className='title'
      size={16}
    >
      {data.title}
    </SubHeader>
  </CardWrapper>
)

Card.propTypes = {
  placeholder: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

const SectionNews = ({ header, description }) => (
  <StaticQuery
    query={NEWS_DATA}
    render={({ logo, medium: { edges } }) => (
      <Wrapper>
        <Inner>
          <Fade>
            <Header
              style={{ marginBottom: 8 }}
              weight={'bold'}
            >
              {header}
            </Header>
            <Paragraph
              onClick={() => navigate(`/blog/`)}
            >
              {description.md.rawMarkdownBody}
            </Paragraph>
          </Fade>
          <Fade delay={200}>
            <div className='content'>
              {edges.map(({ node }) => (
                <Card
                  key={node.id}
                  placeholder={logo}
                  data={medium(node)}
                />
              ))}
            </div>
          </Fade>
        </Inner>
      </Wrapper>
    )}
  />
)

SectionNews.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.shape({
    md: PropTypes.object
  }).isRequired
}

export default SectionNews

const NEWS_DATA = graphql`
  {
    medium: allMediumPost(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          ...MediumPost
        }
      }
    }
    logo: file(relativePath: { regex: "/mintfort_icon-512x512/"}) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
