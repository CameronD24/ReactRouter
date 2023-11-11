import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/blue'; './components/blue'
import Red from './components/red';'./components/red'
import Home from './components/home';'./components/home'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <div id="navbar">
      <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
      <Route path='/blue' elements = {<Blue />} />
      <Route path='/red' elements = {<Red />} />   
      <Route path='/' />
  </Routes>
  </div>
    </div>

    </>
  )
}

export default App
