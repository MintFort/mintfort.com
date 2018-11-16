import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Spinner from 'react-spinkit'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

import EndPageBackground from 'components/backgrounds/pageEnd'
import { EarlyAccess as Submit } from 'components/hero'

import SectionText from 'components/sectionText'

import { theme } from 'library/global'
import { Header } from 'library/index'
import { flex, rem, phone } from 'library/utils'

const Wrapper = styled.section`
  height: 1100px;
  padding: 0 0 ${rem(120)};
  position: relative;

  ${flex({ x: 'flex-end' })}
  flex-direction: column;

  ${phone(css`
    height: 1200px;
    text-align: center;
  `)}
`

const Form = styled.form`
  position: relative;
  margin: 0;
  width: 400px;
  ${flex}
  flex-direction: column;

  ${phone(css`
    padding: 0 ${rem(36)};
  `)}

  ${({ blur }) => blur && css`
    filter: blur(2px);
  `}

  transition: all .3s ease;
`

const Input = styled.input`
  background: ${({ theme }) => theme.blue};

  font-size: ${rem(14)};
  color: #fff;

  border: none;
  border-bottom: 1px solid #fff;

  width: 100%;
  padding: ${rem(16)};
  margin: ${rem(10)} 0;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.mint};
    box-shadow: inset 0 2px 20px rgba(0,0,0,0.17);

    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.mint};
      transition: all .3s ease;
    }
  }
  transition: all .3s ease;
`

const Message = styled.p`
  margin: ${rem(6)} 0 0;
  font-size: ${rem(14)};
  color: #c6c6c6;

  ${({ error }) => error && css`
    color: ${({ theme }) => theme.red}
  `}
`

const SpinWrapper = styled.div`
  position: absolute;
  top: 0;
  background: transparent;

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
  let message = data.msg ? data.msg.replace(/([0-9]|-)/g, '').trim() : ''

  if (message.includes('already subscribed')) {
    [ message ] = message.split('<')
  }

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



class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    response: null,
    loading: false
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    const { email, name } = this.state

    if (isEmpty(email)) return

    this.setState({ loading: true })

    if (!isEmail(email)) {
      this.setState({
        response: {
          result: "error",
          msg: 'That doesn\'t look like a valid email address.'
        },
        loading: false
      })
      return
    }

    const response = await addToMailchimp(
      normalizeEmail(email), { FNAME: !isEmpty(name) && name.trim() }
    )

    this.setState({
      loading: false,
      name: '',
      email: '',
      response
    })
  }

  render() {
    const { response, loading, name, email } = this.state
    const { header: formHeader, buttonText, sectionText: { header, description } } = this.props

    return (
      <>
      <Wrapper>
        <div style={{ width: '100%' }}>
          <SectionText
            header={header}
            description={description}
            color={{ title: "whiteFont" }}
          />
        </div>
        <EndPageBackground/>
        <Header color='whiteFont' id='subscribe'>
          {formHeader}
        </Header>
        <div style={{ position: 'relative' }} >
          <fieldset
            disabled={loading}
            style={{ border: 'none' }}
          >
            <Form
              onSubmit={this.handleSubmit}
              blur={loading}
            >
              <Input
                placeholder='Your name (optional)'
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Input
                required
                placeholder='Your E-mail address'
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              {response && <DisplayMessage data={response} /> }
              <Submit mint>
                {buttonText}
              </Submit>
            </Form>
          </fieldset>
          { loading && <Spin /> }
        </div>
      </Wrapper>
      </>
    )
  }
}

ContactForm.propTypes = {
  sectionText: PropTypes.shape({
    header: PropTypes.string.isRequired,
    description: PropTypes.shape({
      md: PropTypes.object
    }).isRequired
  }).isRequired,
  header: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default ContactForm
