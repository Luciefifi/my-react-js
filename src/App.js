
                import './App.css';
                import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
                import Home from './components/home';
                import Menu from './components/menu';
                import Contact from './components/Contact';
               import  Navigation from './components/navigation';
               import { useState , createContext } from 'react';

                export const AppContext = createContext()

     
               
                function App() {
                  const [userName , setUserName] = useState("Lavendita")
                return(
                <div  className="App">
                  <AppContext.Provider value={{userName , setUserName}}>
                  <Router>
                    <Navigation/>
                  <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                 </Router>
                 </AppContext.Provider>
          

                  
                </div>





              
                )
                }




                export default App;
                
