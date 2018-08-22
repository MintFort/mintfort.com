import React from 'react'
import PropTypes from 'prop-types'

import dividerStart from 'assets/svg/divider_start.svg'

const Divider = ({ style }) => (
  <div style={{
    position: 'absolute',
    bottom: -1,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: "-1",
    ...style
  }}>
    <img
      style={{
        margin: 0,
        display: "block",
        width:'100%',
        heighy: 'auto',
        objectPosition: 'bottom',
        objectFit: 'fill'
      }}
      alt='Divider'
      src={dividerStart}
    />
  </div>
)

Divider.propTypes = {
  style: PropTypes.object
}

export default Divider
