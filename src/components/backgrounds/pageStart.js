import React from 'react'
import PropTypes from 'prop-types'

import startPageBackground from '../../assets/svg/page_background_start.svg'

const Background = ({ style }) => (
  <div style={{
    position: 'absolute',
    top: -1,
    left: -2,
    width: '102%',
    height: '115%',
    zIndex: "-1",
    ...style
  }}>
    <img
      style={{
        width:'100%',
        height: '100%',
        objectPosition: 'bottom',
        objectFit: 'cover'
      }}
      alt='Start page background'
      src={startPageBackground}
    />
  </div>
)

Background.propTypes = {
  style: PropTypes.object
}

export default Background
