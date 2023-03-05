
                
                  import './App.css';
                 import Person from './components/Person';
                 


                function App() {
           
                  
                return(
                <div  className="App">
                
                 <Person
                 name="Lucie"
                 email="lucie@gmail.com"
                 age={23}
                 isMarried={false}
                 friends={["steve" , "funny" , "grace" , "mummy" , "daddy"]}
                 />

                
          

                  
                </div>





              
                )
                
                }




                export default App;
                
