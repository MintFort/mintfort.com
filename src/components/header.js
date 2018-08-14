import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { flex, rem, navHeight, theme, hover, phone } from 'library/utils'

import { whitepaper } from 'siteConfig'
import logo from 'assets/svg/logo_name.svg'
import logoMobile from 'assets/svg/logo.svg'

const Wrapper = styled.header`
  ${flex({ x: 'space-between', y: 'center' })}

  padding: 0 ${rem(20)};
  height: ${navHeight};

  position: fixed;
  width: 100%;
  z-index: 9;

  background: transparent;

  ${({ transparent }) => !transparent && css`
    box-shadow: 0 2px 20px rgba(0,0,0,0.17);
    background: #fff;
  `}

  transition: all .4s ease;
`

const Button = styled.button`
  background: transparent;
  border: none;
  padding: ${rem(4)} ${rem(12)};
  font-size: ${rem(13)};
  cursor: pointer;
  color: ${theme.black};

  &:focus {
    outline: 0;
  }
`

const Nav = styled.nav`
  ${flex}
  a {
    font-weight: 200;
    font-size: ${rem(13)};
    border-radius: 500px;
    border: 2px solid white;
    padding: 0.5rem 1rem;
    background: #fff;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);

    ${hover(css`
      background: ${theme.mint};
      color: #fff;
      border: 2px solid ${theme.mint};
      box-shadow: none;
    `)}

    :not(:last-child) {
      margin: 0.5rem 1rem;
    }

    ${phone(css`
      font-size: ${rem(12)};
      padding: 0.25rem 0.5rem;
    `)}

  }
`

const Logo = styled.div`
  background: url(${({ desktop }) => desktop});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 210px;
  height: 40px;

  ${phone(css`
    background: url(${({ mobile }) => mobile});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    width: 40px;
    height: 40px;

  `)}

  transition: all .2s ease-in;
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
        <Link to={"/"}>
          <Logo
            desktop={logo}
            mobile={logoMobile}
          />
        </Link>
        <Nav>
          <Link to={`/download/`}>Download</Link>
          <a href={whitepaper}>Whitepaper</a>
          <Button onClick={() => onChangeLanguage()}>
            {language === "en" ? "中文" : "English"}
          </Button>
        </Nav>
      </Wrapper>
    )
  }
}

Header.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
}

export default Header
