
import './App.css';

function App() {
  return (
    <div className="App">
      <User 
      fname="Lucie" 
      lname="fifi" 
      age={22} 
      email="lucie@gmail.com"
      />
      <User 
      fname="mummy" 
      lname="daddy" 
      age={145} 
      email="daddymummy@gmail.com"
      />
      <User 
      fname="steve" 
      lname="dederot" 
      age={22} 
      email="steve@gmail.com"
      />
      <Job 
      salary={9000} 
      position="manager" 
      company="amazon"
      />
      <Job 
      salary={1000000} 
      position="software engineer" 
      company="google"
      />
      <Job 
      salary={2000000} 
      position="software engineer" 
      company="facebook"
      />

    </div>
  );
}

const User = (props) =>{
  return (
    <div>
      <h1>{props.lname}</h1>
      <h1>{props.fname}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>


     
  )
}

const Job = (props)=>{
  return(
    <div>
      <h3>{props.salary}</h3>
      <h3>{props.position}</h3>
      <h3>{props.company}</h3>

    </div>
  )
}

export default App;
