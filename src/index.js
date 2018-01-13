import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:400,700']
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
