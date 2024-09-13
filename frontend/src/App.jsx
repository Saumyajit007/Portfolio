import React from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className='app min-h-screen min-w-screen bg-gray-200 text-slate-950  overflow-y-hidden overflow-x-hidden '>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
