import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { addLang } from './layout'

const Content = ({ dataYaml: { hero }, language }) => (
  <div style={{ display: "flex" }}>
    <div>
      <h3>{hero[language].title}</h3>
      <h1>{hero[language].subTitle}</h1>
      <p>{hero[language].body}</p>
    </div>
    <div>
      <img src={require(`../assets/${hero[language].img}`)} alt="Logo" />
    </div>
  </div>
)

const Hero = () => (
  <StaticQuery
    query={graphql`
      query Hero {
        dataYaml {
          hero {
            en {
              title
              subTitle
              body
              img
            }
            zh {
              title
              subTitle
              body
              img
            }
          }
        }
      }
    `}
    render={({ dataYaml }) => addLang(Content, { dataYaml })}
  />
)

export default Hero
