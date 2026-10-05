import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AgendamentoProvider } from './context/AgendamentoContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgendamentoProvider>
      <RouterProvider router={router} />
    </AgendamentoProvider>
  </StrictMode>,
)
