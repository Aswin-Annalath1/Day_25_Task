import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import { useNavigate } from 'react-router-dom'

const TodoSection = ({P_selectedFilter}) => {


  function filterData(Todo,filter,property,value) {
    if (filter === 'All') {
      return Todo; // Return all data
    } else {
      return Todo.filter(item => {
        return filter === 'Completed' ? item[property] === value : item[property] !== value;
      });
    }
  }

  const navigate=useNavigate()
    
    const [Todo,setTodo]=useState([])
    useEffect(()=>{getTodo()},[])

  const getTodo=()=>{
  fetch(`https://6511b6bab8c6ce52b394f19f.mockapi.io/users`)
    .then((data)=>data.json())
    // the seMovieList have the response of api
    .then((res)=>{setTodo(res)})
    // console.log(Todo)
  }
  

  const deleteTodo=(id)=>{
    fetch(`https://6511b6bab8c6ce52b394f19f.mockapi.io/users/${id}`,{method:"DELETE"})
    // This is render in page (calling API) (without this it will be only deleted in API)
    .then(data=>getTodo())
  }  
  
  return (
    <div className='box2'>
        {
            filterData(Todo,P_selectedFilter,'status', 'Completed').map((element)=>(
                <TodoCard {...element} id={element.id}
                deleteButton={<button onClick={()=>deleteTodo(element.id)} style={{backgroundColor:"red", color:"white" ,borderRadius:"5px" ,padding:"0px 15px 0px 15px"}}>Delete</button>}
                editButton={<button onClick={()=>navigate(`/edit/${element.id}`)} style={{margin:"10px",color:"white",backgroundColor:"rgb(8, 133, 8)",borderRadius:"5px", padding:"0px 15px 0px 15px"}}>Edit</button>}
                 />
            ))
        }
    </div>
  )
}

export default TodoSection