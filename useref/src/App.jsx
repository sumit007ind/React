
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count ,setCount] =useState(0);
  let val = useRef(0);

  function handleIncrement(){
    val.current =  val.current+1;
    console.log("value of val",  val.current);
    setCount(count +1);
  }

useEffect(() => {
 console.log("main firse render ho rha hu ")
})

  

  return (
  <div>
    <button onClick={handleIncrement}>Increment</button>
    <br/>
    <br/>
    <button>
      Count:     {count}
    </button>
  </div>
  )
}

export default App
