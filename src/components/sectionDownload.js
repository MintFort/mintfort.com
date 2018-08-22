import React from 'react'
import PropTypes from 'prop-types'
import Icons from 'components/downloadIcons'
import styled, { css } from 'styled-components'

import Section from 'components/section'
import Divider from 'components/backgrounds/start'

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
    <Section
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
