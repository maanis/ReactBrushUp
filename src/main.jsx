import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormHandeling from './components/FormHandeling.jsx'
import Index from './Index.jsx'
import RouterPractice from './RouterPractice.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <RouterPractice />
    </StrictMode>
  </BrowserRouter>,
)
