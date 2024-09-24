
import './App.css'
import { useCallback, useEffect, useState } from 'react'
function App(){
  const [count , setCount]= useState(0);
}
useEffect(()=>{
  alert ("i will run on each render")
})


  function handleclick(){
    setCount(count+1);

  }
  

  return (
   <div>
    <button onClick={handleclick}>click me </button>
   </div>
  )


export default App
