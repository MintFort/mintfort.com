import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Spinner from 'react-spinkit'
import ScrollableAnchor from 'react-scrollable-anchor'

import EndPageBackground from 'components/backgrounds/pageEnd'

import { Header } from 'library/index'
import { flex, rem, theme, hover, phone } from 'library/utils'

const Wrapper = styled.section`
  height: 900px;
  padding: 0 0 ${rem(120)};
  position: relative;

  ${flex({ x: 'flex-end' })}
  flex-direction: column;
`

const Form = styled.form`
  position: relative;
  margin: 0;
  width: 400px;
  ${flex}
  flex-direction: column;

  ${phone(css`
    padding: ${rem(30)};
  `)}
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
        <EndPageBackground style={{ zIndex: "-1" }}/>
        <Header
          color='#fff'
          style={{ textShadow: `1px 1px 10px ${theme.blue}` }}
        >
          Sign up for the waiting list
        </Header>
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
            <Button disabled={loading}>
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
