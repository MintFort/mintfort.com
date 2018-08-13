import styled, { css } from 'styled-components'
import { phone } from './utils'
import { rem } from 'polished'

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
  font-size: ${({ size }) => size ? rem(size) : rem(42)};
  font-weight: bold;

  ${({ color }) => color && css`
    color: ${color};
  `}
`

export const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: 500;
  word-wrap: normal;

  ${({ color }) => color && css`
    color: ${color};
  `}
`

export const SubHeader = styled.h3`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;
  font-size: ${rem(24)};
  font-weight: 500;

  ${({ color }) => color && css`
    color: ${color};

  `}
`
export const Paragraph = styled.p`
  display: block;
  margin: 0;

  ${({ color }) => color && css`
    color: ${color};
  `}
`

export const Img = styled.img`
  display: block;
  margin: 0;

  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
`
