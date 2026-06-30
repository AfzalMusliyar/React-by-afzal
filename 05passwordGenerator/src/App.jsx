import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
    {
      str += "0123456789"
    }
    if(charAllowed)
    {
      str += "!@#$%^&*()[]{}+-=~`"
    }

    for (let i = 1; i <= length; i++) {
      let position = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(position)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed])
  
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  return (
    <>
      <div className='my-4 p-1 mx-auto shadow-md rounded-lg text-orange-500 bg-gray-500'>
        <h1>password generator</h1>
        <div className="flex rounded-lg overflow-hidden">
          <input
            className="w-full px-3 py-2 outline-none bg-gray-200 text-black"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />
          <button 
            className="bg-blue-500 px-4 text-white shrink-0"
            onClick={copyToClipboard}
          >copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
