import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/styles/theme-default.css'
import '@/i18n';
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
  </StrictMode>,
)