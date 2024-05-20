import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'; 
import { Toaster } from 'react-hot-toast';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
   <BrowserRouter>
     <Toaster position='top-center'  toastOptions={{duration:5000}} />
     <TaskProvider>
      <Routes/>
      </TaskProvider>
   </BrowserRouter>
  )
}

export default App
