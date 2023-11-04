import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditTodo = () => {
    // to get id from url
    const {id}=useParams()


                                // here we have to get only id related movie
    const[Todo,setTodo]=useState(null)
    useEffect(()=>getTodoById(),[])

    const getTodoById=()=>{
        fetch(`https://6511b6bab8c6ce52b394f19f.mockapi.io/users/${id}`)
        .then(data=>data.json())
        .then(res=>setTodo(res))
    }




  return (
    <div>
        {
            // conditional render used  and here movie is passed as props
            Todo ? <EditTodoForm todo={Todo}/>:<h1>Loading...</h1>
        }

    </div>
  )
}

export default EditTodo;


const EditTodoForm=({todo})=>{
    const navigate=useNavigate()
                                    // If movie got then render or not print error.. 
    const [name,setName]=useState(todo?.name)
    const [discription,setDiscription]=useState(todo?.discription)

    // function to call api and edit and display
    const updateTodo=(id)=>{

        // we have create details that to be stringify..
        const todo={name,discription}
        fetch(`https://6511b6bab8c6ce52b394f19f.mockapi.io/users/${id}`,{
            method:"PUT",
            body:JSON.stringify(todo),
            headers:{"Content-Type":"application/json"}
            // here if dont make arrow function and just put navigate then page will not refresh...
        }).then(()=>navigate('/'))
    }

        return(
            <div>
                    <>
                    {/* Discription */}
                    <label>Discription:</label>
                    <input type="text" value={discription} onChange={(e)=>{setDiscription(e.target.value)}}/><br/> 
                    {/* Name */}
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/> 
                    <br/>
                                                 {/* id passed as argument */}
                    <button onClick={()=>updateTodo(todo.id)}>Update Todo</button>
                    </>
            </div>
        )
}