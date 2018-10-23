import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'

import { flex, rem, theme, hover, mobile } from 'library/utils'
import { Img, SubHeader, Paragraph } from 'library/index'

const SectionWrapper = styled.section`
  ${flex}

  ${mobile(css`
    flex-direction: column;
  `)}
`

const CardWrapper = styled.div`
  padding: 60px;
  width: 100%;
  background: ${({ city }) => /berlin/i.test(city) ? '#f2f2f4' : '#edecf1'};
  ${flex}

  a {
    font-weight: 700;
    font-size: ${rem(13)};
    border-radius: 500px;
    border: 2px solid white;
    padding: 0.5rem 2rem;
    background: #fff;

    ${hover(css`
      background: ${theme.mint};
      color: #fff;
      border: 2px solid ${theme.mint};
      box-shadow: none;
    `)}
  }
`

const ContactCard = ({ data: { city, mail, address, icon } }) => (
  <CardWrapper city={city}>
    <Img
      style={{ width: 90, height: 90, margin: 10 }}
      alt={city}
      file={icon}
    />
    <div style={{ padding: "10px 30px", whiteSpace: 'nowrap' }}>
      <SubHeader style={{ margin: '4px 0' }}>{city}</SubHeader>
      <Paragraph dangerouslySetInnerHTML={{ __html: address }} />
    </div>
    <div style={{ padding: 20 }}>
      <a href={`mailto:${mail}`}>Contact</a>
    </div>
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
