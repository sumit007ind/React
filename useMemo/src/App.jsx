import{useState} from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(0);
 let i=0;
  function expensiveTask(num){
    console.log("Inside Expensive task");
    for(i=0; i<= 10000000000; i++){}
    return num+2;
  }
  let doubleValue = expensiveTask(4);

  return (
  <div><button onClick={() => setCount(count +1)}>
    Increment 
  </button>

<div>
  Count: {count}
</div>
<div>
  Double:{doubleValue}
</div>
  
  </div>
  )
}

export default App
