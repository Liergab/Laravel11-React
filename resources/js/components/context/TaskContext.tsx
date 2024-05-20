import * as React from 'react'
import apiService from '../services/apServices';

export type taskData = {
    id          :number;
    title       :string;
    description :string;
    completed   :0|1;
    created_at  :string;
    updated_at  :string;
}
type TaskContextType = {
    taskList:taskData[];
    updateContextData: () => void;
}

export const TaskContext = React.createContext<TaskContextType|undefined>(undefined)


export const TaskProvider: React.FC<TaskContextType> = ({children}) => {
    const [taskList , setTaskList] = React.useState<taskData[]>([]);

    const fetchTask = async() => {
        try {
            const res =  await apiService.get<{data:taskData[]}>('/api/get-task-list')
            console.log(res)
            setTaskList(res)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        fetchTask()
    },[])

    const updateContextData = () => {
        fetchTask()
    }

  return (
   <TaskContext.Provider value={{taskList, updateContextData}}>
        {children}
   </TaskContext.Provider>
  )
}


