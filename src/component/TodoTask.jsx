import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";

const TodoTask = ({task,settask,setactivity,setbtn,setedit}) => {

    const handleDelete=(i)=>{

        const isConfirm = window.confirm("are sure you want to remove this ")
        if(isConfirm){
            const filteritem = task.filter((items)=>(
                i!=items.id
                        ))
                        settask(filteritem)  
        }



    }

    const handleEdit=(id)=>{
     
        const finditem = task.find((items)=>(
id===items.id
        ))
        setactivity(finditem.title)
        setbtn(true)
        setedit(id)
    }

const handleremove=()=>{
    settask([])
}
const handleLine=(id)=>{
settask(task.map((completeitem)=>{
    if(completeitem.id===id){
        return {...completeitem,complete:!completeitem.complete}
    }
  return  completeitem;
}))
}
  return (
    <div>
        <ul>
           {
            task.map((item)=>(
                <li className={`flex justify-between border-b-2 px-2 py-2 items-center ${item.complete?"line-through":""}` }   key={item.id}>
                <div className='flex gap-3 items-center'>
                        <span className='cursor-pointer'><CiSquareCheck onClick={()=>handleLine(item.id)  }/></span>
                        <span>{item.title}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='cursor-pointer'><FaRegEdit onClick={()=>handleEdit(item.id)}/></span>
                        <span className='cursor-pointer'><MdDelete  onClick={()=>handleDelete(item.id)}/></span>
                    </div>
                </li>
            ))
           }
        </ul>
      {
        task.length>0?  <button className='bg-red-600 text-white px-3 py-2 rounded-md my-5 hover:bg-red-400' onClick={handleremove}>
        Remove All
    </button>:" "
      }
    </div>
  );
}

export default TodoTask;