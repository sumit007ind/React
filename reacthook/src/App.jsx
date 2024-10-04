
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
      <input {...register("first name" ,{ required: true , minLength:{value:3 , message:"min len atleast 3"},
      maxLength:6 

      })}/>
      {errors.firstName && <p>{errors.firstName.message}</p>}
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
    <button>Help</button>
   </form>

  ) 
}

export default App
