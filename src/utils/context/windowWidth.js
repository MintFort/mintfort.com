import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

// // Loadsh debounce function
// function debounce(func, wait, immediate) {
//   let timeout
//   return function() {
//     let context = this, args = arguments
//     let later = function() {
//       timeout = null
//       if (!immediate) func.apply(context, args)
//     }
//     let callNow = immediate && !timeout
//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//     if (callNow) func.apply(context, args)
//   }
// }

export class WindowWidthProvider extends Component {
  state = {
    width: null
  }

  componentDidMount(){
    this.setState({ width:  window.innerWidth })
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

export const withWindowWidth = Component => props => (
  <Consumer>{value => <Component {...props} {...value}/>}</Consumer>
)
