import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MCQs from './pages/MCQs'
import Coding from './pages/Coding'
import HR from './pages/HR'
import Simulator from './pages/Simulator'
import Dashboard from './pages/Dashboard'
import TestTimer from './pages/TestTimer'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <div className="min-h-screen bg-[#FDFDFE]">
      <ScrollToTop />
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcqs" element={<MCQs />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<TestTimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
