
import './App.css'
import { createBrowserRouter,  RouterProvider} from "react-router-dom";

import home from './components/home';

import dashboard from './components/dashboard';
 
 const router = createBrowserRouter(
  [
    {path:"/home",
      element:<home/>,
    },{
      path:"/About",
      element:<About/>,
    },{path:"/dashboard",
      element:<dashboard/>,
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
