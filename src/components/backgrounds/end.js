import React from 'react'
import PropTypes from 'prop-types'

import dividerEnd from 'assets/svg/divider_end.svg'

const Divider = ({ style }) => (
  <div style={{
    position: 'absolute',
    bottom: -1,
    left: 0,
    width: '100%',
    height: 'auto',
    ...style
  }}>
    <img
      style={{
        margin: 0,
        display: "block",
        width:'100%',
        objectPosition: 'bottom',
        objectFit: 'cover'
      }}
      alt='Divider'
      src={dividerEnd}
    />
  </div>
)

Divider.propTypes = {
  style: PropTypes.object
}

export default Divider
