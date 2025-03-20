import './Lottery.css'
import { useState } from 'react'
import { genTicket, sum } from './helper.js'
import Ticket from './Ticket';

export default function Lottery({n, winsum}){

let [ticket, setticket] = useState(genTicket(n));
let iswinning = sum(ticket) ===winsum;
function gen(){
  setticket(genTicket(n));
}
 return(
  <div>
      <h1>Lottery</h1>
      <div className="container">
      <Ticket ticket={ticket} />
      </div>
      <h3>{iswinning ? "Congratulations, you won!": "you lose"}</h3>
      <button onClick={gen}>Generate</button>
    </div>
  )
}