import React, { useState } from 'react'
export default function Like(){

   let [moves, setmoves] = useState({blue:0, red:0, green:0, yellow:0})
    let update = ()=>{
        setmoves((prev)=>{
            return{...prev, blue:prev.blue+1};
     } )
    }
    return(
        <div>
            <h1>Game begins</h1>
            <p>blue moves = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={update}>+1</button>
            <p>red moves = {moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>green moves = {moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
            <p>yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
        </div>

    )}
