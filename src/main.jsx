import React from 'react'
import ReactDOM from 'react-dom/client'


import './styles.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <JournalApp />
    </BrowserRouter>
  </React.StrictMode>,
)
