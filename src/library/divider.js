import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SvgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  overflow: hidden;

  svg {
    display: block;
    width: 102%;
    height: 100%;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
`

const Divider = ({ children, fill }) => (
  <Wrapper>
    <SvgWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1000"
        height="70"
        preserveAspectRatio="none"
      >
        <path
          fill={fill}
          d="M-0.416,444.825c44.785,199.687,119.287,289.238,234.217-181.766c175.688-719.987,365.783,289.26,365.783,289.26
      L599.468,1080H-0.416V444.825z" />
      </svg>
    </SvgWrapper>
    {children}
  </Wrapper>
)

Divider.propTypes = {
  fill: PropTypes.string
}

Divider.defaultProps = {
  fill: "#1b243f"
}

export default Divider
