import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Img } from 'library/index'
import { flex, rem, navHeight, theme } from 'library/utils'

import logo from 'assets/images/logo_w_name.png'

const Wrapper = styled.header`
  ${flex({ x: 'space-between', y: 'center' })}

  padding: 0 ${rem(20)};
  height: ${navHeight}

  width: 100%;
  box-shadow: ${theme.shadow};
  background: #fff;
`

const Button = styled.button`
  background: transparent;
  border: none;
  padding: ${rem(4)} ${rem(12)}

  cursor: pointer;
  color: ${theme.mint};

  &:focus {
    outline: 0;
  }
`

const Header = props => (
  <Wrapper>
    <Link to="/" >
      <Img src={logo} alt='logo' height='auto' style={{ width: 200 }}/>
    </Link>
    <Button onClick={() => props.onChangeLanguage()}>{props.language}</Button>
  </Wrapper>
)

Header.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired
}

export default Header
