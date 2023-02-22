
                import './App.css';
              
     
               
                function App() {
               
                  fetch("https://catfact.ninja/fact")
                  .then((response) =>
                    response.json()
                    )
                  .then((data) =>{
                    console.log(data)
                  })


                return(
                <div  className="App">
           <button>Generate Cat Fact</button>
           <p></p>
                  
                </div>





              
                )
                }




                export default App;
