
import './App.css'

function App() {
  function handleCLick(){
  alert("i am clicked");
  }
   function handleMouseOver(){
    alert("para ke upar mai rehta hu ");
   }
   function handleInputchange(){
    console.log("input change");
   }
  return (
    <div>
      <form>
        <input type='text' onChange={handleInputchange}/>
      </form>
    </div>
  //  <div>
  //   <button onClick={handleCLick}>Click me</button>
  //   <p onMouseOver={handleMouseOver}>hello  my name is paragraph</p>
  //  </div>
  )
}

export default App
