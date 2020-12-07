import React, {useEffect} from 'react'


import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ChartsArea from './components/ChartsArea'
import './App.css'

const App = () => {


  return (
    <div >
      <Navbar />
      <Hero />
      <ChartsArea />
    </div>
  )
}

export default App
