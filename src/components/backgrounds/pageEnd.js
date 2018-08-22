import React from 'react'
import PropTypes from 'prop-types'

import endPageBackground from 'assets/svg/page_background_end.svg'

const Background = ({ style }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: -2,
    width: '102%',
    height: '100%',
    zIndex: "-1",
    ...style
  }}>
    <img
      style={{
        width:'100%',
        height: '100%',
        objectPosition: 'top',
        objectFit: 'cover'
      }}
      alt='End page background'
      src={endPageBackground}
    />
  </div>
)

Background.propTypes = {
  style: PropTypes.object
}

export default Background
