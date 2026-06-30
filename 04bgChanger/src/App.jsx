import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState("olive")
  return (
    <div className='w-screen h-screen duration-300' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-4 py-1 rounded-3xl' style={{backgroundColor:'black'}}>
        <div className='flex flex-wrap justify-center gap-3 bg-gray-400 px-3 py-2 rounded-lg'>
          <button
            onClick={() => setColor("red")}
            className='outline-2 px-4 py-1 rounded-4xl shadow-2xl'
            style={{backgroundColor:"red"}}
          >RED</button>
          <button
            onClick={() => setColor("green")}
            className='outline-2 px-4 py-1 rounded-4xl shadow-2xl'
            style={{backgroundColor:"green"}}
          >GREEN</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-2 px-4 py-1 rounded-4xl shadow-2xl'
            style={{backgroundColor:"blue"}}
          >BLUE</button>
        </div>
      </div>
    </div>
  )
}

export default App