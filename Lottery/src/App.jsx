import { useState } from 'react'
import Lottery from  './Lottery'
import './App.css'
import {sum} from './helper.js'

function App() {
let wincondn = (ticket) =>{
  return sum(ticket) ===15;
  //return ticket.every((num)=>num ===ticket[0]);
  //return ticket[0]===0;
}
  return (
    <>
    <Lottery n={4} wincondn = {wincondn} />
    </>
  )
}

export default App
