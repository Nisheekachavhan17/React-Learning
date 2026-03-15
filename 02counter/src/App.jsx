/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter , setCounter] = useState(15)

let addValue = () =>{
  
  if(counter <= 19)
  setCounter(counter + 1)
else {
  console.log("Value is more than 20");
  
}
}
  let remValue = () =>{
 if(counter >=1)
    setCounter(counter - 1)
  else {
      console.log("Value is less than 0");
  }
  }



  return (
    <>
      <h1> 02 series of react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={remValue}>Remove value  {counter} </button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App */

import React, { useState ,useEffect} from 'react'

const App = () => {
const [counter ,setCounter] = useState(0);
const [name , setName ] = useState("");
const[otherCount,setOtherCount]= useState(0);
/*useEffect(()=>{
  document.title = `${counter} new messages !`; 
})
  function increaseValue(){
setCounter(counter + 1);
  }*/ // useEffect without dependencies

  /*useEffect(()=>{
  document.title = `${counter} new messages !`; 
},[])
  function increaseValue(){
setCounter(counter + 1);
  }*/ // useEffect with an empty array

  useEffect(()=>{
  document.title = `${counter} new messages !`; 
  document.title = `${otherCount} new messages !`; 
},[otherCount]); // useEffect with variables
  function increaseValue(){
setCounter(counter + 1);
  }
function increaseBy5()
{
  setOtherCount(otherCount + 5);
}
  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} />
      <h1> {name} has changed {counter} times</h1>
      <h1> {name} has changed {otherCount} times</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={increaseBy5} > Increase by 5</button> 
    </div>
  )
}

export default App
