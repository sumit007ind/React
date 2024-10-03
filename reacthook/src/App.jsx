
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  

  return (
   <form>
    <div>
      <label >first name</label>
      <input/>
    </div>
    <div>
      <label >middle name </label>
      <input/>
    </div>
    <div>
      <label >Last name</label>
      <input/>
    </div>
   </form>

  ) 
}

export default App
