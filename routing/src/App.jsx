
import './App.css'
import { createBrowserRouter,  RouterProvider} from "react-router-dom";

import Home from './components/home';


 
 const router = createBrowserRouter(
  [
    {path:"/Home",
      element:<Home/>,
    },
   
  ]
 );
function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
      <div></div>
    </div>
  )
}

export default App
