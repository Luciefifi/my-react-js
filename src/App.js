
import './App.css';
import User from './components/user';
function App() {
//   const age = 27 ;
//   const isGreeen = false
//   const users = [
//                  {person:"ange" , age:21 , sex:"female"},
//                   {person:"me" , age:22 , sex:"male"},
//                   {person:"lisa" , age:23 , sex:"female"},

// ]
  
//   return (
   
//     <div className="App">
    
    
//       {/* <div className='App'>
//         {age >= 43 ? <h1 >OVER AGE</h1> : <h1> UNDER AGE</h1>}
//         <h2 style={{ color:isGreeen ? "green" : "blue" }}>THIS HAS A COLOR</h2>

        
        
//       </div> */}
//      {
//       users.map((user,key)=>{
//         return <User person = {user.person} age = {user.age} sex = {user.sex}  />
//       })
//      }
    

//     </div>
//   );

const planets = [
  {name: "Mars" , isGasPlanet: false },
  {name: "Earth" , isGasPlanet: false },
  {name: "Jupiter" , isGasPlanet: true },
  {name: "Venus" , isGasPlanet: false },
  {name: "Neptune" , isGasPlanet: true },
  {name: "Uranus" , isGasPlanet: true },
]

return(
 <div  className="App">
 { planets.map((planet,key)=>{
if(planet.isGasPlanet)return(<h1 key={key}>{planet.name}</h1>)
 })}
 </div>
)
}




export default App;
