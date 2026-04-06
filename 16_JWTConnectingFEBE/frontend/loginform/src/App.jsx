import React from 'react'
import { useState } from 'react'
import axios from "axios";

function App() {
  const[signupusername,setsignupusername] = useState("");
  const[signuppassword,setsignuppassword]=useState("");

  const[signinusername,setsigninusername]=useState("");
  const[signinpassword,setsigninpassword]=useState("");

 const[data,setdata]=useState({});

  const[token,settoken]=useState("");

  const handelSignup = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3000/signup",{
      username:signupusername,
      password:signuppassword
    })
    alert("You are Signup!!")
  }

  const handelSignin =async(e)=>{
      e.preventDefault();

      const response = await axios.post("http://localhost:3000/signin",{
        username:signinusername,
        password:signinpassword
      })
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      alert("You are Signed in!!!");
  }
  
  const getUserInfo = async(e)=>{
    e.preventDefault();
    
  const response = await axios.get("http://localhost:3000/me", {
      headers:{
        token:localStorage.getItem("token")
      }
  })
  
   setdata(response.data);

  }
  

  return (
    <div>
     
     {/* Signup  */}
     <h2>Signup</h2>
      <form onSubmit={handelSignup} action="">
         <input onChange={(event)=>setsignupusername(event.target.value)} type="text" value={signupusername} placeholder='username' />
         <input onChange={(event)=>setsignuppassword(event.target.value)} type="text" value={signuppassword} placeholder='password' />
         <button type='submit'>Signup</button>

      </form>

      {/* Signin  */}
      <h2>Signin</h2>
      <form onSubmit={handelSignin} action="">
        <input onChange={(event)=>setsigninusername(event.target.value)} type="text" value={signinusername} placeholder='username' />
        <input onChange={(event)=>setsigninpassword(event.target.value)} type="text" value={signinpassword} placeholder='password' />
        <button type='submit' >Signin</button>
      </form>

      <div>
        <h2>UserInfo</h2>
         <h1>{data.username}</h1>
         <h1>{data.password}</h1>
         <button onClick={getUserInfo} >Get Info</button>
      </div>

    </div>
    
  )
}

export default App