import React,{useState,useEffect} from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Loading from './loading/Loading.jsx'
function App() {
  const [load,setLoad]=useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  },[])

  return (
    <div className='app min-h-screen min-w-screen bg-gray-200 text-slate-950  overflow-y-hidden overflow-x-hidden antialiased'>
      {
        load ?
        <Loading/>
        :
        <div>
        <Header />
        <Outlet />
        </div>
      }
    </div>
  )
}

export default App
