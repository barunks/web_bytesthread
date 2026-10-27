import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import TickerTape from './components/TickerTape'
import Footer from './components/Footer'
import Home from './pages/Home'
import HftFx from './pages/HftFx'
import Crypto from './pages/Crypto'
import AiTrading from './pages/AiTrading'
import PortfolioRisk from './pages/PortfolioRisk'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    return undefined
  }, [pathname])
  return null
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <TickerTape />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'hft-fx', element: <HftFx /> },
      { path: 'crypto', element: <Crypto /> },
      { path: 'ai-trading', element: <AiTrading /> },
      { path: 'portfolio-risk', element: <PortfolioRisk /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
