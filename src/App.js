
                // import Form from './components/Form';
                  import './App.css';
                  // import './Form.css';
                  import { useState } from 'react';
                  
              //   import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
              //   import Home from './components/home';
              //   import Menu from './components/menu';
              //   import Contact from './components/Contact';
              //  import  Navigation from './components/navigation';

              //  import { QueryClient , QueryClientProvider } from '@tanstack/react-query';


                function App() {
                  const [isVisible , setIsVisible] = useState(false)
                  // const client = new QueryClient({defaultOptions:{
                  //   queries:{
                  //     refetchOnWindowFocus: false
                  //   }
                  // }})
                  
                return(
                <div  className="App">
                  <button onClick={()=> setIsVisible((prev) => !prev)}>
                    {isVisible ? "Hide" : "Show"}
                    
                  </button>
                  {isVisible && <h1>Hidden Text</h1>}
                  {/* <QueryClientProvider client={client}>
                  <Router>
                    <Navigation/>
                  <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                 </Router>
                 </QueryClientProvider> */}
                 {/* <Form/> */}
                
          

                  
                </div>





              
                )
                
                }




                export default App;
                
