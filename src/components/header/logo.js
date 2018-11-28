import styled, { css } from 'styled-components'
import { phone } from '../../styles/utils'

import logo from '../../assets/svg/logo_name.svg'
import logoWhite from '../../assets/svg/logo_name_white.svg'
import logoMobile from '../../assets/svg/logo.svg'

const Logo = styled.div`
  background: url(${({ transparent }) => (
    transparent ? logoWhite : logo
  )});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;
  width: 210px;
  height: 40px;

  ${phone(css`
    background: url(${logoMobile});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    width: 40px;
    height: 40px;

  `)}

  transition: all .3s ease-in;
`

export default Logo
