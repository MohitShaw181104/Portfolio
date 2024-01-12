import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

function App() {
  return (
    <div>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Work/>
      </main>
    </div>
  )
}

export default App
