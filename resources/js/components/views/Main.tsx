import React from 'react'
import TaskForm from './form/TaskForm'
import Table from './table/Table'

const Main = () => {
  return (
   <section className="w-full max-w-7xl min-h-screen mx-auto flex items-center justify-center">
    <div className="flex w-full min-h-[500px]">
        <div className="flex-[.6] p-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Hello I'M Pro-Gab!</h1>
                <h1 className="text-xl font-semibold">I'm Learning Laravel and React  Monolithic Architecture 🎯</h1>
            </div>
            <TaskForm/>
        </div>
        <div className="flex-1 p-4">
            <div>
                <h1 className="text-2xl font-bold text-center">List of task 📋 </h1>
            </div>
            <Table/>
            
        </div>
    </div>
   </section>
  )
}

export default Main
