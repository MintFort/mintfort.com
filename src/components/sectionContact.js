import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'

import { flex, mobile, phone } from 'library/utils'
import { Img, SubHeader, Paragraph, Button } from 'library/index'

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
    <Img
      width={90}
      style={{ margin: 10 }}
      alt={city}
      file={icon}
    />
    <div className="inner">
      <SubHeader style={{ margin: '4px 0' }}>{city}</SubHeader>
      <Paragraph
        size={13}
        dangerouslySetInnerHTML={{ __html: address }}
      />
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


const SectionContact = () => (
  <StaticQuery
    query={query}
    render={({ site: { meta: { contact } } }) => (
      <SectionWrapper>
        {contact.map(({ city, mail, address, icon }) => (
          <ContactCard
            key={city}
            data={{ city, mail, address, icon }}
          />
        ))}
      </SectionWrapper>
    )}
  />
)

SectionContact.propTypes = {
  contact: PropTypes.object
}

export default SectionContact

const query = graphql`
  {
    site {
      meta: siteMetadata {
        contact {
          city
          mail
          address
          icon
        }
      }
    }
  }
`
