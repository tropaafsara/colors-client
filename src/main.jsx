import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddColors from './components/AddColors.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:8000/colors')
  },
  {
    path: "addColors",
    element: <AddColors></AddColors>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-5xl mx-auto '>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  </div>
)

