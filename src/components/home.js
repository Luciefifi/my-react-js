import axios from "axios"
import {useQuery} from "@tanstack/react-query"

const Home = () =>{
  const {data , isLoading , isError , refetch} = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact")
      .then((res)=>res.data)
  })

  if(isError)
  {
    return <h1>Sorry , there was an error</h1>
  }
  if(isLoading)
  {
    return <h1>is Loading....</h1>
  }
  return(
    <div>
      <h1>This the home page <p>{data?.fact} </p></h1>
      <button onClick={refetch}>update the date</button>
    </div>
  )
}

export default Home
