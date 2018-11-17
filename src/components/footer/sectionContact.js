import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImage from 'gatsby-image'

import { flex, mobile, phone } from 'library/utils'
import { SubHeader, Paragraph, Button } from 'library'

const SectionWrapper = styled.footer`
  ${flex}

  ${mobile(css`
    flex-direction: column;
  `)}
`

const CardWrapper = styled.div`
  align-self: stretch;
  padding: 60px;
  width: 100%;
  background: ${({ city }) => /berlin/i.test(city) ? '#f2f2f4' : '#edecf1'};

  ${flex}
  justify-content: space-around;

  ${phone(css`
    flex-direction: column;
    text-align: center
  `)}

  .inner {
    white-space: nowrap;
    flex: 0.5;

    @media (max-width: ${1200 / 16}em) {
      padding-right: 20px;
    }

    ${mobile(css`
      padding-right: 20px;
      justify-content: space-around;
    `)}


    ${phone(css`
      padding: 0;
      margin-right: 0;
      margin-bottom: 20px;
    `)}
  }
`

const ContactCard = ({ data: { city, mail, address, icon } }) => (
  <CardWrapper city={city}>
    <GatsbyImage
      style={{ width: 90 }}
      alt={city}
      fixed={icon.fixed}
    />
    <div className="inner">
      <SubHeader style={{ margin: '4px 0' }}>{city}</SubHeader>
      <Paragraph
        style={{ whiteSpace: 'pre' }}
        size={13}
      >
        {address.md.rawMarkdownBody}
      </Paragraph>
    </div>
    <Button
      as='a'
      href={`mailto:${mail}`}
      style={{
        boxShadow: 'none'
      }}
    >
      Contact
    </Button>
  </CardWrapper>
)

ContactCard.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    mail: PropTypes.string,
    address: PropTypes.string,
    icon: PropTypes.string
  }).isRequired
}


const SectionContact = ({ contact }) => console.log(contact)||(
  <SectionWrapper>
    {contact.map(({ city, mail, address, icon }) => (
      <ContactCard
        key={city}
        data={{ city, mail, address, icon }}
      />
    ))}
  </SectionWrapper>
)

SectionContact.propTypes = {
  contact: PropTypes.object
}

export default SectionContact
