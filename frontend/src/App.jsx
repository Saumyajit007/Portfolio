import React ,{lazy,Suspense}from 'react'
import { Outlet } from 'react-router-dom'
const Header=lazy(()=>import('./components/Header.jsx'))
function App() {

  return (
    <div className='app min-h-screen min-w-screen bg-gray-200 text-slate-950  overflow-y-hidden overflow-x-hidden antialiased'>
        <div>
        <Suspense fallback={<></>}><Header /></Suspense>
        <Outlet />
        </div>
    </div>
  )
}

export default App
