import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './components/routes/Homepage.tsx'
import SignUp from './components/routes/SignUp.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-svh'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
