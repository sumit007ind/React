import {useState} from 'react'
import './App.css'

function App() {
  const[count , setCount]= useState(0);

  function handleClick(){
    setCount(count+2);
  }
 

  return (
    <div>
      <div>
        count:{count}
      </div>
      <button onClick = {handleClick}>
       Increment
      </button>
    </div>
  )
}

export default App
