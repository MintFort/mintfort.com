import React from 'react'
import { Link } from 'gatsby'

const Header = props => (
  <div style={{
    padding: '0 20px',
    display: "flex",
    justifyContent: 'space-between',
    alignContent: 'centrate',
    background: 'rebeccapurple',
    marginBottom: '1.45rem'
  }}
  >
    <div style={{ padding: '1.45rem 1.0875rem' }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
    </div>
    <button onClick={() => props.onChangeLanguage()}>{props.language}</button>
  </div>
)

export default Header
