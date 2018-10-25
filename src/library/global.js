import { css, createGlobalStyle } from 'styled-components'

import { hover, transitions } from './utils'

export const theme = {
  mint: '#19DBB6',
  blue: '#1b243f',
  red: '#F44336',
  gray: "#F2F2F2",
  paragraph: '#788cc7',
  lightFont: "#A2A3AB",
  whiteFont: "#f0f0f0",
  shadow: '0 5px 20px rgba(0,0,0,0.08)'
}

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: #1f1f1f;

    ${hover(css`
      color: ${theme.mint};
    `)}

    ${transitions('color 0.1s ease')};
  }

  main {
    overflow: hidden;
  }

  button, input {
    &:focus {
      outline: 0;
    }
  }
`

export default GlobalStyle
