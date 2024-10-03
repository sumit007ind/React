
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
   <form onSubmit={handleSubmit((data) => console.log (data))}>
    <div>
      <label >first name</label>
      <input {...register("first name")}/>
    </div>
    <div>
      <label >middle name </label>
      <input {...register("middle name")}/>
    </div>
    <div>
      <label >Last name</label>
      <input {...register("last name")}/>
    </div>
   </form>

  ) 
}

export default App
