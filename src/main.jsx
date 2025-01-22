import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormHandeling from './components/FormHandeling.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormHandeling />
  </StrictMode>,
)
