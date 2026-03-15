import React ,{useState} from 'react'

const PracticeHooks = () => {
    const [count , setCount] = useState(0);

    function increase()
   {
    
    if(count < 10)
    {
        setCount(count + 2);   
    }
    else 
    {
console.log("You have reached maximum limit");
    }
   } 

   function decrease ()
   {
    if(count >0){
    setCount(count - 2);
    }
    else 
    {
        console.log("You have reached minimum limit");
        
    }
   }

   function reset()
   {
    setCount(0)
   }
  return (
    <div>
      <h1>Count : {count}</h1>
        <h1>Value increased by </h1>
        <h1>Value decreased by </h1>
        <h1>Value reset by </h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}> Decrease  </button>
        <button onClick={reset}>Reset  </button>

    </div>
  )
}

export default PracticeHooks