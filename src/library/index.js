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
  font-weight: bold;

  font-size: ${({ size }) => size && rem(size) || rem(42)};
  ${({ color }) => color && css`
    color: ${color};
  `}

  ${phone(css`
    font-size: ${rem(36)};
    text-align: center;
  `)}
`

export const Header = styled.h2`
  font-weight: 500;
  word-wrap: normal;

  font-size: ${({ size }) => size && rem(size) || rem(32)};

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
  font-weight: 500;

  font-size: ${({ size }) => size && rem(size) || rem(24)};

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
`

export const Img = styled.img.attrs({
  src: ({ file }) => file && require(`../assets/images/${file}`)
})`
  display: block;
  margin: 0;

  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
`

export const Submit = styled.button`
  background: ${({ theme }) => theme.mint };
  color: ${({ theme }) => theme.blue};
  font-weight: 700;
  cursor: pointer;

  border-radius: ${rem(20)};
  border: ${({ theme }) => `1px solid ${theme.mint}`};

  padding: ${rem(6)} ${rem(30)};
  margin: ${rem(30)} 0 ${rem(10)};

  ${hover(css`
    background: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.mint};
  `)}

  transition: all .1s ease;
`

export const Button = styled.button`
  font-weight: 700;
  font-size: ${rem(13)};
  border-radius: 500px;
  border: 2px solid white;
  padding: 0.5rem 2rem;
  background: #fff;

  ${hover(css`
    background: ${({ theme }) => theme.mint};
    color: #fff;
    border: 2px solid ${({ theme }) => theme.mint};
    box-shadow: none;
  `)}
`
