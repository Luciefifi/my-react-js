
                import './App.css';
                import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
                import Home from './components/home';
                import Menu from './components/menu';
                import Contact from './components/Contact';
               import  Navigation from './components/navigation';

               import { QueryClient , QueryClientProvider } from '@tanstack/react-query';


                function App() {
                  const client = new QueryClient({defaultOptions:{
                    queries:{
                      refetchOnWindowFocus: false
                    }
                  }})
                  
                return(
                <div  className="App">
                  <QueryClientProvider client={client}>
                  <Router>
                    <Navigation/>
                  <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                 </Router>
                 </QueryClientProvider>
                
          

                  
                </div>





              
                )
                
                }




                export default App;
                
