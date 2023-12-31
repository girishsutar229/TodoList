import React from 'react'
import { TodoItem } from '../MyComponents/TodoItem'

export const Todos = (props) => {
    let mystyle ={
        minHeight: "50vh",
        margin:"30px auto",
    }
  return (
    <div className='container my-3' style={mystyle}>  
        <h2 className='my-3 text-center' >Todos List!!</h2>
        {props.todos.length===0 ? "No Todos To Display" :
            props.todos.map((todo)=>{
              return (
              <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
              </>
              )
            })
        }
       
    </div>  
  )
}
