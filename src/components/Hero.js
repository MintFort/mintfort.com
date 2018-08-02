import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Content = ({ lan, data: { hero } }) => console.log(hero)||(
  <div style={{ display: "flex" }}>
    <div>
      <h3>{hero[lan].title}</h3>
      <h1>{hero[lan].subTitle}</h1>
      <p>{hero[lan].body}</p>
    </div>
    <div>
      <img src={require(`../assets/${hero[lan].img}`)} alt="Logo" />
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
            cn {
              title
              subTitle
              body
              img
            }
          }
        }
      }
    `}
    render={({ dataYaml }) => <Content lan='en' data={dataYaml} />}
  />
)

export default Hero
