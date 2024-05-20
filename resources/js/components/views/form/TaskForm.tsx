import React from 'react'
import apiService from '../../services/apServices';

const TaskForm = () => {
    const[title, setTitle] = React.useState<string>('');
    const[description, setDesc] = React.useState<string>('');
   
    
        const handleSubmit = () => {
            apiService
              .post("api/save-task", {
                title,
                description,
              })
              .then((res) => {
              console.log(res)
              });
          };

       
    
  return (
    <div className="mt-14 p-10 border-2 border-white rounded-xl ">
     <div action="" className="flex flex-col space-y-4 items-center justify-center">
        <input 
            type="text" 
            placeholder="Task title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full" 
        />
        <textarea 
         className="textarea textarea-bordered w-full" 
         placeholder="Description" 
         value={description}
         onChange={(e) => setDesc(e.target.value)}
         >
        </textarea>
        <button className="btn btn-outline w-full" onClick={handleSubmit} type="button">Save Task</button>
     </div>
    </div>
  )
}

export default TaskForm
