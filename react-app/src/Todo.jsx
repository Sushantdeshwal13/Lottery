import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './Todo.css';
export default function Todo(){
    let [tasks, settask]=useState([{todo:"task1", id:uuidv4(), isDone:false},]);
    let [newtasks, setnewtask]=useState("");

    let addnewtask=()=>{
        settask((prevtodos)=>{
            return [...prevtodos, {todo: newtasks, id: uuidv4(), isDone:false}];
        });
        setnewtask("");
    }

    let update = (e)=>{
        setnewtask(e.target.value);
    }
       let deletetodo=(id)=>{
        let newtodo=tasks.filter((task)=>task.id!==id);
        settask(newtodo);
       }
       
       let uppercaseOne=(id)=>{
        settask((prevtodos)=>{
            return prevtodos.map((task)=>{
                if(task.id===id){
                    return {todo:task.todo.toUpperCase(), id:task.id};
                }
                return task;
            });
        });
       }
       let MarkDone=()=>{
        settask((prevtodos)=>{
            return prevtodos.map((task)=>{
                    return {...task, isDone:!task.isDone};
                
            });
        });
       }
    return(
        <div>
            <input type="text" value={newtasks}onChange={update} placeholder="Enter your task" />
            <button onClick={addnewtask}>Add</button> 
            <br></br>     
            <hr></hr>
            <ul>
                 {tasks.map((task)=>(
                    <li key={task.id}>
                        <span style={task.isDone ? {textDecorationLine:"line-through"} : {}}>{task.todo}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deletetodo(task.id)}>Delete</button>
                        <button onClick={()=>uppercaseOne(task.id)}>uppercaseOne</button>
                        <button onClick={()=>MarkDone(task.id)}>Mark Done</button>
                        </li>
                        
            )
                 )}
            </ul>
            <br></br>
            <button onClick={MarkDone}>Mark as Done</button>
        </div>
    )
}