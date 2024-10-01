import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './about/About.jsx'
import Home from './home/Home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  }
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
