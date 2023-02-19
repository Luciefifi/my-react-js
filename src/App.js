
import './App.css';
import { useState } from 'react';
function App() {
const [count , setCount] = useState(0)

const increase = () =>{
setCount(count+1)
}

const decrease = ( ) =>{
  setCount(count-1)
}

const setToZero = () =>{
  setCount(0)
}

return(
 <div  className="App">
 <button  style = {{ backgroundColor : "green"}} onClick={increase}>Increase</button> 
 <button  style = {{ backgroundColor : "red"}} onClick={decrease}>decrease</button>
 <button  style = {{ backgroundColor : "yellow"}} onClick={setToZero}>set to zero</button>
{count}
 </div>
)
}




export default App;
