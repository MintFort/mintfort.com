import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const { Provider, Consumer } = createContext()

export class Context extends Component {
  state = {
    language: 'en'
  }
  componentDidMount(){
    this.handleLang()
  }
  handleLang = () => {
    const lang = localStorage.getItem('lang')

    if (!lang) {
      const { language } = this.state
      localStorage.setItem('lang', language)
      return this.handleStateLang(language)
    }

    return this.handleStateLang(lang)

  }
  handleStateLang(language){
    if (language) {
      this.setState({ language })
      return
    }

    this.setState(state => ({
      language: state.language === 'en' ? 'zh' : 'en'
    }), () => {
      localStorage.setItem('lang', this.state.language)
      // TODO: this should be dynamic (It's ok atm.)
      navigate(`/${this.state.language}${this.props.location.pathname.match(/download/) ? '/download' : ''}`)
    })
  }

  render(){
    return (
      <Provider value ={{
        language: this.state.language,
        onChangeLanguage: () => this.handleStateLang()
      }}>{this.props.children}</Provider>
    )
  }
}

Context.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

Context.defaultProps = {
  location: {
    pathname: '/'
  }
}

export const addLang = (Component, props) => (
  <Consumer>{value => <Component {...props} {...value}/>}</Consumer>
)
