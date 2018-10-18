import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import SectionText from 'components/sectionText'
import Divider from 'components/backgrounds/start'

import Icons from './downloadIcons'

import { phone, mobile } from 'library/utils'


const DividerWrapper = styled.div`
  position: relative;
  height: 230px;

  ${mobile(css`
    height: 180px;
  `)}

  ${phone(css`
    height: 120px;
  `)}

  transition: all .2s;
`

const SectionDownload = ({ title }) => (
  <>
    <SectionText
      title={title}
      content={<Icons />}
      padding='6vh 0'
      color={{
        background: 'transparent'
      }}
    />
    <DividerWrapper>
      <Divider />
    </DividerWrapper>
  </>
)

SectionDownload.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionDownload
