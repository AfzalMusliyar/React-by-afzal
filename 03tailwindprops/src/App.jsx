import { useState } from 'react'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name:'afzal',
    age:20
  }
  let myArr=[1,2,3]

  return (
    <>
      <h1 className='bg-yellow-300 text-black p-3 rounded-xl mb-2'>Tailwind</h1>
      {/* <Card channel='chaiaurcode' firstObject={myObj} secondobject={myArr}/> */}
      <Card username='chaiaurcode' btnText="explore"/>
      <Card username='afsooooooool'/>
    </>
  )
}

export default App
