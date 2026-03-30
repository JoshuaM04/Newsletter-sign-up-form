import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Newsletter from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Newsletter />
  </StrictMode>,
)
