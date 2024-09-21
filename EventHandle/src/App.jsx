
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
      <button className=''>my name is sumit sharma </button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nesciunt reprehenderit a, quaerat quibusdam illum sunt recusandae sequi culpa id incidunt ipsam libero. Ad exercitationem veniam, necessitatibus minus voluptatum, dolore vero itaque magnam modi veritatis quas, quisquam sit pariatur odio optio vel repellat tempore consectetur eveniet aspernatur aliquid quibusdam dignissimos officia harum? Rerum tempore molestias, unde repudiandae sint sunt ullam placeat rem quaerat. Consectetur dolorem ad accusantium molestias quaerat repudiandae optio, magnam praesentium nesciunt quasi, laudantium quod? Quibusdam quis deserunt expedita et?</p>
    </div>
  //  <div>
  //   <button onClick={handleCLick}>Click me</button>
  //   <p onMouseOver={handleMouseOver}>hello  my name is paragraph</p>
  //  </div>
  )
}

export default App
