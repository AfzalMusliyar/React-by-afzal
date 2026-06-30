import { useState } from 'react'

function App() {

  // let counter=5

  //adding or removing would jud=st update the counter but its not changed in ui......so we use useState
  //syntax [the variable to be monitored,the action]
  let [counter,setCounter] = useState(5)

  const addValue = () =>{
    //one syntax(fn k andar hi likho)
    setCounter(counter + 1)   
    
    /*                               //the interview problem
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) 
    // setCounter(counter + 1)  
    // //conclusion:it wont add 4 in one press,fibre considers all as one batch process(this is a property of useState,not a problem of the function)
    
    // //solution:so do it like this,setcounter returns as a call back function..then it executes one by one
    setCounter(prevcounter => prevcounter + 1)   //can use any variable
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1) 
    setCounter(prevcounter => prevcounter + 1)  
    */
  }
  const removeValue = () =>{
    //other syntax(alag se update k baad fn me bhejo)
    counter = counter - 1
    setCounter(counter)       
    
    /*                               //the interview problem
  
    counter = counter - 1
    counter = counter - 1
    counter = counter - 1
    counter = counter - 1      
    setCounter(counter)       
    
    //conclusion:idr ekssath 4 kam hoga kyuki pehle vaariable pe hi poora ek ke baad ek update hora
    */     
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>      
    </>
  )
}

export default App
