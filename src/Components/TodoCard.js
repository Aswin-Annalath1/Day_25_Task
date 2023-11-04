import React, { useState } from 'react'

const TodoCard = ({id,name,status,discription,deleteButton,editButton}) => {
  
// passed the Updation as Comp on OnClick event and it get updated on API
  const updateComplete=(id,Comp)=>{

    // we have create details that to be stringify..
    const status=Comp
    const change={status}
    fetch(`https://6511b6bab8c6ce52b394f19f.mockapi.io/users/${id}`,{
        method:"PUT",
        body:JSON.stringify(change),
        headers:{"Content-Type":"application/json"}
        // here This code window will refresh page and update
    }).then(()=>window.location.reload())
}

  return (
    <>
    <div className='box'> 
            <div>Name:{name}</div>
            <div>Description:{discription}</div>
            Status : 
            <span class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       {status}
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button"  onClick={()=>{
                          updateComplete(id,'Completed')
                          
                        }}>Completed</button></li>
                        <li><button class="dropdown-item" type="button"  onClick={()=>{
                          updateComplete(id,'Not Completed')
                          
                        }}>Not Completed</button></li>
                    </ul>
            </span>
            <div>
            {deleteButton}
            {editButton}
            </div>
    </div>
    </>
  )
}

export default TodoCard