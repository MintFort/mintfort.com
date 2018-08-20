import Typography from "typography"

import { theme } from 'library/utils'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['800', '700', '500', '400']
    },
    {
      name: 'Lato',
      styles: ['200', '400', '500', '700']
    }
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  scaleRatio: 2,
  headerFontFamily: ['Montserrat', 'BlinkMacSystemFont', '-apple-system', 'Roboto', 'Lucida Sans'],
  bodyFontFamily: ['Lato', 'BlinkMacSystemFont', '-apple-system', 'Roboto', 'Lucida Sans'],
  headerColor: theme.blue,
  bodyColor: theme.lightFont,
  bodyWeight: '400'
})

export default typography
