import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

import { Img } from 'library/index'
import { flex, rem, navHeight, theme, transitions } from 'library/utils'

import logo from 'assets/images/logo_w_name.png'

const Wrapper = styled.header`
  ${flex({ x: 'space-between', y: 'center' })}

  padding: 0 ${rem(20)};
  height: ${navHeight};

  position: fixed;
  width: 100%;
  z-index: 9;

  background: transparent;

  ${({ transparent }) => !transparent && css`
    box-shadow: ${theme.shadow};
    background: #fff;
  `}

  ${transitions('all 0.4s ease')};
`

const Button = styled.button`
  background: transparent;
  border: none;
  padding: ${rem(4)} ${rem(12)};

  cursor: pointer;
  color: ${theme.black};

  &:focus {
    outline: 0;
  }
`

class Header extends Component {
  state = {
    transparent: true
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)

  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ transparent: false })
      return
    }
    this.setState({ transparent: true })
  }
  render(){
    const { transparent } = this.state
    const { language, onChangeLanguage } = this.props

    return (
      <Wrapper transparent={transparent}>
        <Link to="/" >
          <Img
            src={logo}
            alt='logo'
            height='auto'
            style={{ width: 200 }}
          />
        </Link>
        <Button onClick={() => onChangeLanguage()}>{language}</Button>
      </Wrapper>
    )
  }
}

Header.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
}

export default Header
