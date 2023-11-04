import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TodoSection from './TodoSection'


const Mytodo = () => {

     //For Filtering when button click
    const [selectedFilter, setSelectedFilter] = useState('All');

    const [name,setName]=useState("")
    const [discription,setDiscription]=useState("")
    const [status,setStatus]=useState("Not Completed")

    const navigate=useNavigate()

    const addTodo=()=>{
        // object made to take current value to it
        const Todo={name,discription,status}
        // console.log(Todo)
        //API Call
       fetch(`https://6511b6bab8c6ce52b394f19f.mockapi.io/users`,{
           method:"POST",
           body:JSON.stringify(Todo),
           headers:{"Content-Type":"application/json"}
           // here if dont make arrow function and just put navigate then page will not refresh...
       }).then(()=>window.location.reload())
       
   }    

  return (
    <>
    <div style={{margin:'20px 200px 0px 200px'}}>
        <div className='box3' >My Todo</div>
        <span className='topbox'> 
            <input style={{inlineSize:'300px',fontSize:'15px',borderBlockColor:'rgb(0, 155, 0)'}} type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Todo Name'/>
            <input style={{inlineSize:'300px', fontSize:'15px',borderBlockColor:'rgb(0, 155, 0)'}} type="text" value={discription} onChange={(e)=>{setDiscription(e.target.value)}} placeholder='Todo Discription'/>
            <button className='box4' onClick={()=>{
                addTodo()
                setStatus("Not Completed")
                }}>Add Todo</button>
        </span>
        <span className='topbox1'> 
           <div style={{fontWeight:'bold',fontSize:'18px'}}>My Todos</div>
            <div style={{fontWeight:'bold',fontSize:'17px'}}>Status Filter :    
                <span class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedFilter}
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button" onClick={()=>setSelectedFilter('All')}>All</button></li>
                        <li><button class="dropdown-item" type="button" onClick={()=>setSelectedFilter('Completed')}>Completed</button></li>
                        <li><button class="dropdown-item" type="button" onClick={()=>setSelectedFilter('Not Completed')}>Not Completed</button></li>
                    </ul>
                </span>
            </div>
        </span>
        <TodoSection P_selectedFilter={selectedFilter}/>
    </div>
 </>
  )
}

export default Mytodo