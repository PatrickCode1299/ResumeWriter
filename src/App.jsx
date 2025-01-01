
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Views/Landing'
import Create from './Views/Create'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    element:<Landing />
    },
    {
      path:"/create",
      element:<Create />
    },
  ]);
  return (
   <RouterProvider router={router} />
  )
}

export default App
