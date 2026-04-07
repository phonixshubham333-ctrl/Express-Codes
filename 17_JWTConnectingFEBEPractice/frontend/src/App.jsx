import React from 'react'
import { useState } from 'react'
import axios from "axios";

function App() {
  const[signupusername,setsignupusername]=useState("");
  const[signuppassword,setsignuppassword]=useState("");

  const[signinusername,setsigninusername]=useState("");
  const[signinpassword,setsigninpassword]=useState("");

  

  const[token,settoken]=useState("");

  const[value,setvalue]=useState({});

  const handelSignup = async (e)=>{
    e.preventDefault();
    const response= await axios.post("http://localhost:3000/signup",{
      username:signupusername,
      password:signuppassword
    })
    alert(response.data.msg);
  }

  return (
    <div>
      <h1>Signup</h1>
       <form onSubmit={handelSignup} action="">
         <input onChange={(event)=>setsignupusername(event.target.value)} type="text" placeholder='username' value={signupusername} />
         <input onChange={(event)=>setsignuppassword(event.target.value)} type="text" placeholder='password' value={signuppassword} />
         <button>Signup</button>
       </form>
      

    </div>
  )
}

export default App