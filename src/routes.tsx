import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Agendamentos from './pages/Agendamentos'
import Sobre from './pages/Sobre'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'agendamentos', element: <Agendamentos /> },
      { path: 'sobre', element: <Sobre /> },
    ],
  },
])
