import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddTodo = ({addTodo}) => {
     //this for direct go in the home page when cliking the submite button of add-todo
      const navigate = useNavigate();

    const [title,setTitle] =useState("");
    const [desc,setDesc]=useState("");

    const submit =(e) =>{
   
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank ")
        }
        else{
          addTodo(title,desc);
          setTitle("");
          setDesc(""); 
        }  

        setTimeout(()=>{
            console.log("Form Submit");

            navigate("/");
        },0);
    }


    return (
        <div className='container my-3'>
            <h2 className='text-center addtodo'>Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
            
                <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
            </form>
        </div>
    )
}
