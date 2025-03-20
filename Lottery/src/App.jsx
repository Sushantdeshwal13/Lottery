import { useState } from 'react'
import Lottery from  './Lottery'
import './App.css'

function App() {

  return (
    <>
    <Lottery n={4} winsum={10} />
    </>
  )
}

export default App
