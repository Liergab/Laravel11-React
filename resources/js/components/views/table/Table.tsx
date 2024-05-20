import * as React from 'react'
import { TaskContext, taskData } from '../../context/TaskContext'
import { FaCheck } from "react-icons/fa6";
import apiService from '../../services/apServices';
import { FiTrash } from "react-icons/fi";
import toast from 'react-hot-toast';
const Table = () => {
   const{taskList,updateContextData} = React.useContext(TaskContext)

   const handleUpdate = async (id:number) => {
        try {
            const res = await apiService.put(`/api/mark-as-done/${id}`)

            console.log(res)
            toast.success(res.data.message)
            updateContextData();

        } catch (error) {
            console.log(error.response.data.message)
        }
   }

   const handleDelete = async (id:number) => {
    try {
        const res = await apiService.delete(`/api/delete-task/${id}`)

        console.log(res)
        toast.success(res.data.message)
        updateContextData();

    } catch (error) {
        console.log(error.response.data.message)
    }
   }
 
  return (
    <div className="bg-slate-400 mt-14 p-4 rounded-xl">
        <div className=" flex p-4 flex-wrap items-center w-full justify-center gap-4 h-full max-h-96  overflow-y-auto ">
            {taskList?.data?.map((t:taskData) => (
                <div className="card w-full flex flex-row justify-between items-center bg-slate-950  shadow-xl p-4" key={t.id}>
                    <div className="card-body">
                        <h2 className="card-title">{t.title}</h2>
                        <p>{t.description}</p>
                    </div>
                    <div className="w-16 mr-16 space-x-4 flex">
                        <button class="btn btn-square" onClick={() => handleUpdate(t.id)}>
                          <FaCheck  className="text-2xl" />
                        </button>
                        <button class="btn btn-square" onClick={() => handleDelete (t.id)}>
                          < FiTrash className="text-2xl" />
                        </button>
                    </div>
                </div>
            ))}      
        </div>
    </div>
  )
}

export default Table
