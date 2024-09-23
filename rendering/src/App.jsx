import { useState } from 'react'

import './App.css'
import loginbtn from './components/loginbtn';
import logoutbtn from './components/logoutbtn';

function App() {
  const[isLoggedIn , setLoggedIn] = useState(true);

 return(
  <div>
    <h1>welcome everyone to Codehelp Web Dev cource</h1>
    <p>My Name is Sumit Sharma </p>
    <div>
      {isLoggedIn && <logoutbtn/>}
    </div>
  </div>
 )
}

export default App
