import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Spinner from 'react-spinkit'
import GatsbyImg from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Header } from 'library/index'
import { flex, rem, theme, hover } from 'library/utils'

const Wrapper = styled.section`
  height: 900px;
  padding: 0 0 ${rem(120)};
  ${flex({ x: 'flex-end' })}
  flex-direction: column;
  position: relative;
`

const Form = styled.form`
  position: relative;
  margin: 0;
  width: 400px;
  ${flex}
  flex-direction: column;
`

const Input = styled.input`
  background: ${theme.blue};

  font-size: ${rem(14)};
  color: #fff;

  border: none;
  border-bottom: 1px solid #fff;

  width: 100%;
  padding: ${rem(16)};
  margin: ${rem(10)} 0;
`

export const Button = styled.button`
  background: ${theme.mint};
  color: ${theme.blue};
  font-weight: 700;
  cursor: pointer;

  border-radius: ${rem(20)};
  border: 1px solid ${theme.mint};

  padding: ${rem(6)} ${rem(30)};
  margin: ${rem(30)} 0 ${rem(10)};

  ${hover(css`
    background: ${theme.blue};
    color: ${theme.mint};
  `)}

  transition: all .2s ease;
`

const Message = styled.p`
  margin: ${rem(6)} 0 0;
  padding: ${rem(10)};
  font-size: ${rem(14)};
  color: #c6c6c6;

  ${({ error }) => error && css`
    color: ${theme.red}
  `}
`

const SpinWrapper = styled.div`
  position: absolute;
  background: ${theme.blue};
  opacity: 0.7;

  width: 100%;
  height: 100%;

  ${flex}
`

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/sign-up.png"}) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ image }) => (
      <GatsbyImg
        imgStyle={{
          objectFit: 'cover',
          objectPosition: 'top'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: -1,
          width: '101%',
          height: '100%',
          zIndex: "-1"
        }}
        alt='Subscribe background'
        fluid={image.childImageSharp.fluid}
      />
    )}
  />
)

const Spin = () => (
  <SpinWrapper>
    <Spinner name="ball-triangle-path" color={theme.mint} />
  </SpinWrapper>
)

const DisplayMessage = ({ data }) => {
  const message = data.msg ? data.msg.replace(/([0-9]|-)/g, '').trim() : ''
  return (
    <Message
      error={data.result && data.result === 'error' && true}>
      {message}
    </Message>
  )
}

DisplayMessage.propTypes = {
  data: PropTypes.shape({
    msg: PropTypes.string,
    result: PropTypes.string
  }).isRequired
}

class Register extends Component {
  state = {
    name: '',
    email: '',
    result: null,
    loading: false
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true })
    const { email, name } = this.state
    const result = await addToMailchimp(email, { FNAME: name })

    this.setState({
      loading: false,
      name: '',
      email: '',
      result })
  }

  render() {
    const { result, loading, name, email } = this.state

    return (
      <Wrapper>
        <Background />
        <Header color={'#fff'}>Sign up for the waiting list</Header>
        <ScrollableAnchor id='subscribe'>
          <Form onSubmit={this.handleSubmit}>
            <Input
              placeholder='Your name (optional)'
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}/>
            <Input
              required
              placeholder='Your E-mail address'
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange} />
            <Button
              disabled={loading}>
            Pre-Register
            </Button>
            {
              result && <DisplayMessage data={result} />
            }
            { loading && <Spin /> }
          </Form>
        </ScrollableAnchor>
      </Wrapper>
    )
  }
}

export default Register
