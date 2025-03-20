import './Lottery.css'
import { useState } from 'react'
import { genTicket, sum } from './helper.js'
import Ticket from './Ticket';
import Button from './Button.jsx';


export default function Lottery({n, wincondn}){

let [ticket, setticket] = useState(genTicket(n));
let iswinning = wincondn(ticket);

function gen(){
  setticket(genTicket(n));
}
 return(
  <div>
      <h1>Lottery</h1>
      <div className="container">
      <Ticket ticket={ticket} />
      </div>
      <Button action={gen} />
      <h3>{iswinning ? "Congratulations, you won!": "you lose"}</h3>
    </div>
  )
}