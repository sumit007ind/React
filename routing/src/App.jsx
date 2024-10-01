
import './App.css'
import { createBrowserRouter,} from "react-router-dom";
 
 const router = createBrowserRouter(
  [
    {path:"/home",
      element:<home/>
    },{
      path:"/about",
      element:<about/>
    },{path:"/dashboard",
      element:<dashboard/>
    },
    
  ]
 );
function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
