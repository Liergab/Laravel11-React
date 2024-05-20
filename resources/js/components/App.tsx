import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'; 

const App = () => {
  return (
   <BrowserRouter>
      <Routes/>
   </BrowserRouter>
  )
}

export default App
