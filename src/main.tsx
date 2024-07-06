import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './routes/Homepage.tsx'
import SignUp from './routes/SignUp.tsx'
import Notes from './routes/Notes.tsx'
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
  {
    path: "notes",
    element: <Notes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-svh'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
