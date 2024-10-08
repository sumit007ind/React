
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count ,setCount] =useState(0);
  let val = useRef(0);
  let btnRef = useRef();

  function handleIncrement(){
    val.current =  val.current + 1;
    console.log("value of val",  val.current);
    setCount(count +1);
  }

useEffect(() => {
 console.log("main firse render ho rha hu ")
})
function changeColor(){
  btnRef.current.style.backgroundColor = "red ";

}

  

  return (
  <div>
    <button 
    ref={btnRef}
    onClick={handleIncrement}>Increment</button>
    <br/>
    <br/>
    <br/>
    <button onClick={changeColor}>Change color of 1st button </button>
    <button>
      <br/>
      Count:     {count}
    </button>
  </div>
  )
}

export default App
