
                import './App.css';
                import Axios from 'axios';
                import { useEffect, useState } from 'react';
              
     
               
                function App() {
                  const [name , setName] = useState("")
                  const [predictatedAge , setPredictedAge] = useState(0)
                  const [familyExcuse , setFamilyExcuse] = useState([])
                  const [partyExcuse , setPartyExcuse] = useState([])
                  const [officeExcuse , setOfficeExcuse] = useState([])

                  const fetchCatFact = () =>{
                    Axios.get("https://catfact.ninja/fact")
                    .then((res)=>{
                     setCatFact(res.data.fact)
                    })
                  }
                  const [catFact , setCatFact] = useState("")
                  useEffect(()=>{
                    fetchCatFact();
                  },[])


                  const fetchPredictatedAge = () =>{
                    Axios.get(`https://api.agify.io/?name=${name}`)
                    .then((response)=>{
                      setPredictedAge(response.data)
                    })
                  }
                  useEffect(()=>{
                    setPredictedAge()

                  },[])
               const fetchFamilyExcuse = () =>{
                Axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`)
                .then((res)=>{
                  setFamilyExcuse(res.data[0].excuse)
                })
               }

               useEffect(()=>{
                fetchFamilyExcuse()
               },[])


               const fetchPartyExcuse = () =>{
                Axios.get(`https://excuser-three.vercel.app/v1/excuse/party/`)
                .then((res)=>{
                  setPartyExcuse(res.data[0].excuse)
                })
               }

               useEffect(()=>{
                fetchPartyExcuse()
               },[])

               const fetchOfficeExcuse = () =>{
                Axios.get(`https://excuser-three.vercel.app/v1/excuse/office/`)
                .then((res)=>{
                  setOfficeExcuse(res.data[0].excuse)
                })
               }

               useEffect(()=>{
                fetchOfficeExcuse()
               },[])
                 


                return(
                <div  className="App">
                 
           <button onClick={fetchCatFact}>Generate Cat Fact</button> <br></br>
           <input 
                  placeholder='your name . ex : Lavender'
                  onChange={(event)=>{
                    setName(event.target.value)
                  }}/> <br></br>
           <button onClick={fetchPredictatedAge}>get Predictated Age</button>
           <p>{catFact}</p> <br></br>
           <h3> Name : {predictatedAge?.name}</h3>
           <h3> Age : {predictatedAge?.age}</h3>
           <h3> Count : {predictatedAge?.count}</h3>


           <h1>Generate excuse</h1>
           <button onClick={fetchFamilyExcuse}>Family</button>
           <h2>excuse:{familyExcuse}</h2>
           <button onClick={fetchPartyExcuse}>Party</button>
           <h2>excuse:{partyExcuse}</h2>
           <button onClick={fetchOfficeExcuse}>Office</button>
           <h2>excuse:{officeExcuse}</h2>

                  
                </div>





              
                )
                }




                export default App;
