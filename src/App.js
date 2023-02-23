
                import './App.css';
                import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
                import Home from './components/home';
                import Menu from './components/menu';
                import Contact from './components/Contact';
              import  Navigation from './components/navigation';
     
               
                function App() {
                return(
                <div  className="App">
                  <Router>
                    <Navigation/>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                 </Router>
          

                  
                </div>





              
                )
                }




                export default App;
