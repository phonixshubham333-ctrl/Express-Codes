import React from 'react'
import { useState } from 'react'
import axios from "axios"

function App() {
  const [firstval, setVal] = useState("");
  const [secondVal, setSecondVal] = useState("");

  const handelOnSubmit = async (ev)=>{
    ev.preventDefault();

    try { 

      
      
        let response = await axios.post("http://localhost:3000/sum",{
          a:firstval,
          b:secondVal
        })
      
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
    
  }

 

  return (
    <>
      <form onSubmit={handelOnSubmit}>
        <input onChange={(event) => setVal(event.target.value)} type="text" placeholder='firstvalue' />
        <input onChange={(event) => setSecondVal(event.target.value)} type="text" placeholder='secondvalue' />
        <input type="submit" />
      </form>
    </>
  )
}

export default App