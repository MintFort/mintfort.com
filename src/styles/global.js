import { css, createGlobalStyle } from 'styled-components'

import { hover, transitions, navHeight } from './utils'

export const theme = {
  mint: '#19DBB6',
  blue: '#1b243f',
  red: '#F44336',
  gray: "#F2F2F2",
  paragraph: '#788cc7',
  lightFont: "#A2A3AB",
  whiteFont: "#f0f0f0",
  white: "#fff",
  shadow: '0 5px 20px rgba(0,0,0,0.08)',
  navHeight
}

const GlobalStyle = createGlobalStyle`
  *::selection {
    color: ${theme.blue};
    background: ${theme.mint};
  }

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
