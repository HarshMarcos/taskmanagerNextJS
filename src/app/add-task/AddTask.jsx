'use client'

import React, { useState } from 'react'
import taskImage from '../../app/assets/task.svg'
import Image from 'next/image'
import { addTask } from '@/services/taskService'
import { toast } from 'react-toastify'


const AddTask =  () => {
  // document.title=metadata.title
  
  const [task, setTask] = useState({
    title:'',
    content:'',
    status:'none',
    //Temporary ID
    userid:'6582bfa812635ed458fa1ecb'
  })

  const handleAddTask = async (e) =>{
    e.preventDefault();
    console.log(task)
    //validate task data
    try {
      const result = await addTask(task)
      console.log(result)
      toast.success("Task Successfully Added!!", {
        position: "top-center"
      })

      setTask({
        title:'',
        content:'',
        status:''
      })
    } catch (error) {
      console.log(error)
      toast.error("Failed To Create New Task", {
        position: "top-center"
      })
    }
    
  }

  return (
    <div className='text-white grid grid-cols-12 justify-center'>
      <div className='col-span-6 col-start-4 shadow-md p-5'>
        <div className='my-8 flex justify-center'>
          <Image alt='Add Task Image' src={taskImage} style={{
            width:"50%",
          }}/>
        </div>
        <h1 className='text-3xl text-center'>Add Your Task Here</h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* Task Title */}
          <div className='mt-4'>
            <label htmlFor='task_title' className='block text-sm font-medium mb-2'>Title</label>
            <input type='text' className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950' id='task_title' 
              name="task_title" 
              onChange={(event)=>{
                setTask({
                  ...task,
                  title:event.target.value,
                })
              }}
              value={task.title}
            />
          </div>
          {/* Content */}
          <div className='mt-4'>
            <label htmlFor='task_content' className='block text-sm font-medium mb-2'>Content</label>
            <textarea type='text' className='w-full p-3.5 rounded-3xl bg-blue-950 focus:ring-blue-950 border border-blue-950' id='task_content' rows={5}
              name='task_content'
              onChange={(event) => {
                setTask({
                  ...task,
                  content:event.target.value
                })
              }}
              value={task.content}
            />
          </div>
          {/* Status */}
          <div className='mt-4'> 
            <label className='block text-sm font-medium mb-2' htmlFor='task_status'>
              Status
            </label>
            <select id='tast_status' className='w-full p-3.5 rounded-3xl bg-blue-950 focus:ring-blue-950 border border-blue-950'
              name='tast_status'
              onChange={(event)=>{
                setTask({
                  ...task,
                  status:event.target.value
                })
              }}
              value={task.status}
            >
              <option value="none"  disabled>--Select Status--</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className='mt-20 flex justify-center space-x-5'>
            <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-950'>Add Todo</button>
            <button className='bg-red-500 py-2 px-3 rounded-lg hover:bg-red-950'>Clear</button>
          </div>
          {/* {
            JSON.stringify(task)
          } */}
        </form>
      </div>
    </div>
  )
}

export default AddTask