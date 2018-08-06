import React, { Component, createContext } from 'react'
import { push } from 'gatsby'

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
      push(`/${this.state.language}`)
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

export const addLang = (Component, props) => (
  <Consumer>{value => <Component {...props} {...value}/>}</Consumer>
)
