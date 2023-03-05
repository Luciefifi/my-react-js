
                // import Form from './components/Form';
                  import './App.css';
                  // import './Form.css';
                  import useToggle from './useToggle';
                  
              //   import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
              //   import Home from './components/home';
              //   import Menu from './components/menu';
              //   import Contact from './components/Contact';
              //  import  Navigation from './components/navigation';

              //  import { QueryClient , QueryClientProvider } from '@tanstack/react-query';


                function App() {
            const [isVisible , toggle] = useToggle()
            const [isVisible2 , toggle2] = useToggle()
                  // const client = new QueryClient({defaultOptions:{
                  //   queries:{
                  //     refetchOnWindowFocus: false
                  //   }
                  // }})
                  
                return(
                <div  className="App">
                  <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
                  {isVisible && <h1>Hidden Text</h1>}
                  <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
                  {isVisible2 && <h1>Hidden Text</h1>}
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
                
