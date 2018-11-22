import React from 'react'
import PropTypes from 'prop-types'

import SectionText from '../../components/sectionText'
import Logos from './exchangeLogos'


const SectionExchanges = ({ header, boxes: logos }) => (
  <SectionText
    header={header}
    description={ <Logos logos={logos}/> }
  />
)

SectionExchanges.propTypes = {
  header: PropTypes.string.isRequired,
  boxes: PropTypes.array.isRequired
}

export default SectionExchanges
