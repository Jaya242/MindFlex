import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
)
