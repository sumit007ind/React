
import { useDebugValue } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector({state} => state.counter.value);
  const dispatch = useDispatchs();



 function handleIncrementCLick(){

 }
 function handleDecrementClick(){

 }


  return (
    <div className='container'>
  <button onClick={handleIncrementCLick}>+</button>
  <h2>Click Me</h2>
  <button onClick={handleDecrementClick}>-</button>
    </div>
  )
}

export default App
