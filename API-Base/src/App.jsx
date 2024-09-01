import { useState, useEffect } from "react";
import { Getuser } from "./index";
import "./App.css";
import Usercard from "./components/Usercard";

function App() {
  const[User , setUser] = useState(null);

  const refresh = () =>{
    Getuser().then((result)=>setUser(result.results[0]))
  }
  
  useEffect(()=>{ 
    Getuser().then((result)=>setUser(result.results[0])
    
     )
  },[])
  
  return (
    
    <div className="post-card">
      <span className="font-bold text-green-700 text-5xl">Random </span><span className="text-3xl font-semibold">User</span>
      {User && <Usercard data= {User}/>}
      <button className="text-base text-black bg-blue-600 rounded-lg mt-4 font-bold py-1 px-2" onClick={refresh}>Get User</button>
     </div>    
  )

}

export default App;
