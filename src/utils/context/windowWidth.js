import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

export class WindowWidthProvider extends Component {
  state = {
    width: typeof window !== 'undefined' && window.innerWidth
  }

  componentDidMount(){
    window.addEventListener("resize", this.handleResize)
  }
  handleResize = () => {
    this.setState({ width: window.innerWidth })
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }

  render(){
    return (
      <Provider value ={{
        windowWidth: this.state.width
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export const addWindowWidth = (Component, props) => (
  <Consumer>{value => <Component {...props} {...value}/>}</Consumer>
)
