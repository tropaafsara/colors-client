import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import ColorCard from './components/ColorCard'
import Navbar from './components/Navbar'

function App() {
  const colors = useLoaderData();
  console.log(colors);
  
  
  return (
    <>
    <Navbar></Navbar>

      <h1 className='text-5xl text-center mt-8 mb-8'>Color Palette</h1>
      <div className="grid grid-cols-3 gap-4">
        {
          colors.map(color=><ColorCard
          key={color.id}
          color={color}
          ></ColorCard>)
        }
      </div>

    </>
  )
}

export default App
