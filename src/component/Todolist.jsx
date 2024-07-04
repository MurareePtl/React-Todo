import React, { useState } from 'react'
import TodoTask from './TodoTask';
import { v4 as uuidv4 } from 'uuid';

const Todolist = () => {
    const[activity,setactivity]=useState("")
    const[task,settask]=useState([])
    const[btn,setbtn]=useState(false)
    const[edit,setedit]=useState(null)
  
    const handleupdate=()=>{
        if(activity===""){
alert("Please Enter something In the inputbox")
        }
      else if(btn){
settask(task.map((newEle)=>{
if(newEle.id===edit){
    return {...newEle,title:activity}
}
return newEle;
}))
setactivity("")
    setbtn(false)
    setedit(null)


       }
       else{
        const allactivity = {id:uuidv4(),title:activity,complete:false}
        // console.log(allactivity)
        settask([...task,allactivity])
        setactivity("")
       }
    }
  return (
    <div>
        <section className='text-gray-600 bg-black overflow-hidden'>
            <div className='container px-5 py-24 mx-auto'>
                 <div className='w-[80%] mx-auto flex flex-wrap'>
    {/* left side */}
<div className='lg:w-1/2'>
<img src="https://png.pngtree.com/png-clipart/20230915/original/pngtree-cartoon-boy-working-on-his-laptop-vector-png-image_12227122.png" alt="" />
</div>
{/* left side */}
{/* right side */}
<div className='lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
    <h2 className='text-gray-900 font-bold mb-5 text-center text-5xl'>
        ToDo
    </h2>
    <div className='mb-4'>
<input type="text" value={activity} onChange={(e)=>setactivity(e.target.value)} className='w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading transition-colors duration-200 ease-in-out' />
    </div>
 {
    btn?   <button onClick={handleupdate} className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600  rounded text-lg'>
    Update
</button>:   <button onClick={handleupdate} className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600  rounded text-lg'>
   Add
</button>
 }

<TodoTask task={task} settask={settask} setactivity={setactivity} setbtn={setbtn} setedit={setedit}/>
</div>
{/* right side */}


                 </div>
            </div>

        </section>
    </div>
  );
}

export default Todolist;