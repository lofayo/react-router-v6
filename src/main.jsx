import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import BasicExample from './basicExample'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasicExample />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
