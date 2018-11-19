import styled, { css } from 'styled-components'
import { rem, hover, phone } from './utils'

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ col }) => col ? "column" : "row"};

  ${({ size }) => size && size.w && css`
    width: ${size.w};
 `}

  ${({ size }) => size && size.h && css`
    height: ${size.h};
  `}

  ${({ centrate }) => centrate && css`
    align-items: center;
    justify-content: center;
  `}

  ${({ position }) => position && position.x && css`
    justify-content: ${position.x};
  `}

  ${({ position }) => position && position.y && css`
    align-items: ${position.y};
  `}

  ${({ guide }) => guide && process.env.NODE_ENV === 'development' && css`
    border: 1px dashed red;
  `}


  ${phone(css`
    flex-direction: column;
  `)}
`

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;

  font-size: ${({ size }) => (size && rem(size)) || rem(42)};
  font-weight: ${({ weight }) => ((weight && weight)) || 700};

  ${({ color }) => color && css`
    color: ${color};
  `}

  ${phone(css`
    font-size: ${rem(36)};
    text-align: center;
  `)}
`

export const Header = styled.h2`
  word-wrap: normal;

  font-size: ${({ size }) => (size && rem(size)) || rem(32)};
  font-weight: ${({ weight }) => (weight && weight) || 500};

  ${({ color }) => color && css`
    color: ${({ theme }) => theme[color]};
  `}

  ${phone(css`
    font-size: ${rem(24)};
  `)}
`

export const SubHeader = styled.h3`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;

  font-size: ${({ size }) => (size && rem(size)) || rem(24)};
  font-weight: ${({ weight }) => (weight && weight) || 500};

  ${({ color }) => color && css`
    color: ${({ theme }) => theme[color]};
  `}

  ${phone(css`
    font-size: ${rem(18)};
  `)}
`
export const Paragraph = styled.p`
  display: block;
  margin: 0;

  ${({ size }) => size && css`
    font-size: ${rem(size)};
  `}

  ${({ color }) => color && css`
    color: ${({ theme }) => theme[color]};
  `}

  ${({ pre }) => pre && css`
    white-space: pre;
  `}
`

export const Button = styled.button`
  font-weight: 500;
  font-size: ${rem(13)};

  border-radius: ${rem(20)};
  border: 1px solid #fff;

  background: #fff;

  padding: ${rem(8)} ${rem(30)};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow};

  ${hover(css`
    color: ${({ theme }) => theme.whiteFont};
    background: ${({ theme }) => theme.mint};
    border: 1px solid ${({ theme }) => theme.mint};
    box-shadow: none;
  `)}

  ${({ theme, mint }) => mint && css`
    font-weight: 700;
    font-size: ${rem(15)};
    background: ${theme.mint};
    color: ${theme.blue};
    border: 1px solid ${theme.mint};

    ${hover(css`
      background: ${theme.blue};
      color: ${theme.mint};
    `)}

  `}

  transition: all .2s ease;
`
