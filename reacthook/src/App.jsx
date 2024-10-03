
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
   function onsubmit(){
      console.log("submitting the form , data");
   }

  return (
   <form onSubmit={handleSubmit(onsubmit)}>
    <div>
      <label >first name</label>
      <input {...register("first name" ,{ required: true })}/>
    </div>
    <div>
      <label >middle name </label>
      <input {...register("middle name")}/>
    </div>
    <div>
      <label >Last name</label>
      <input {...register("last name")}/>
    </div>
    <br/>
    <input type='submit'/>
   </form>

  ) 
}

export default App
