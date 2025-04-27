import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import About from './about/About.jsx'
// import Home from './home/Home.jsx'
// import Error from "./components/Error.jsx"
import './index.css'
import { lazy,Suspense } from 'react'
const Home =lazy(()=>import('./home/Home.jsx'))
const About=lazy(()=>import('./about/About.jsx'))
const Error=lazy(()=>import("./components/Error.jsx"))
const App=lazy(()=>import('./App.jsx'))
import Loading from './loading/Loading.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading/>}><App /></Suspense>,
    children: [
      {
        path: "/",
        element:<Suspense fallback={<Loading/>}><Home /></Suspense> ,
      },
      {
        path: "/about",
        element:<Suspense fallback={<Loading/>}> <About /></Suspense>,
      },
    ],
    
  },
  {
    path:"/*",
    element:<Suspense fallback={<Loading/>}> <Error/></Suspense>,
  },
]);
createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
  </>,
)
