import ChildComponent from './component/childComponent';

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
      <br/>
      <br/>
      <button onClick = {handleClick}>
       Increment
      </button>
      <br/> 
      <br/>
      <br/>
      <div>
        <button>
        <ChildComponent buttonName="click me "
        handleClick ={handleClick} />
        </button>
      </div>

    </div>
  )
}

export default App
