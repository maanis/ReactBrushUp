import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterPractice from './RouterPractice.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <RouterPractice />
    </BrowserRouter>,
  </Context>
)
