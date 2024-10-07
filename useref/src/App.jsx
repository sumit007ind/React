
import { useState } from 'react'
import './App.css'

function App() {
  const [count ,setCount] =useState(0);
  

  return (
  <div>
    <button>Increment</button>
    <br/>
    <br/>
    <button>
      Count:     {count}
    </button>
  </div>
  )
}

export default App
