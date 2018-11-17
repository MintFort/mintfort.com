import React from 'react'
import PropTypes from 'prop-types'

import dividerStart from '../../assets/svg/divider_start.svg'
import dividerStartHome from '../../assets/svg/divider_start-home.svg'

const Divider = ({ style, diagonal }) => (
  <div style={{
    position: 'absolute',
    bottom: -1,
    left: 0,
    width: '102%',
    height: 'auto',
    zIndex: "-1",
    ...style
  }}>
    <img
      style={{
        margin: 0,
        display: "block",
        width:'100%',
        height: 'auto',
        objectPosition: 'bottom',
        objectFit: 'fill'
      }}
      alt='Divider'
      src={diagonal === 'light' ? dividerStartHome : dividerStart}
    />
  </div>
)

Divider.propTypes = {
  style: PropTypes.object,
  diagonal: PropTypes.string
}

Divider.defaultProps = {
  diagonal: "light"
}

export default Divider
