import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div>React App </div>
    </Router>
  )
}

export default App
