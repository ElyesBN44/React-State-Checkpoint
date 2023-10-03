import './App.css';
import React,{useState} from 'react'
import Tim from "./Components/Timer"
function App() {
  const [show,setShow]=useState(true)
  
  return (
    <div className="App">
     {
       show?<div>
       <h4>Full Name: Seamus Cowden(Sledge)</h4>
       <h4>Bio: Recruited into the SAS, where he holds multiple records in speed and strength.</h4>
       <img src="Images/Sledge.png" alt="SAS"/>
       <h4>Profession: S.A.S Breacher</h4>
       <h4><Tim/></h4></div>
       

       :null
     }

<button onClick={()=>setShow(!show)} >Appear</button> 
    </div>
  );
}

export default App;