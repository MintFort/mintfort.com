import { css } from 'styled-components'

export const navHeight = 86

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner}
  }
`

export const centrate = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`
