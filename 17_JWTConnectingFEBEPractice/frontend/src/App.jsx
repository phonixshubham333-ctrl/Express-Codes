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

  const handelSignin = async(e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/signin",{
      username: signinusername,
      password:signinpassword
    })
    settoken(localStorage.setItem("token",response.data.token));
    alert("Signin Successfull!!!")
  }

  const getUserInfo = async(e)=>{
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/me",{
      headers:{
        token:localStorage.getItem("token")
      }
    })
    setvalue(response.data);
  }

  return (
    <div>
      <h1>Signup</h1>
       <form onSubmit={handelSignup} action="">
         <input onChange={(event)=>setsignupusername(event.target.value)} type="text" placeholder='username' value={signupusername} />
         <input onChange={(event)=>setsignuppassword(event.target.value)} type="text" placeholder='password' value={signuppassword} />
         <button>Signup</button>
       </form>
      
      <h1>Signin</h1>
      <form  onSubmit={handelSignin}  action="">
        <input onChange={(event)=>setsigninusername(event.target.value)} type="text" placeholder='username' value={signinusername} />
        <input onChange={(event)=>setsigninpassword(event.target.value)} type="text" placeholder='password' value={signinpassword} />
        <button>Signin</button>
      </form>
      
      <h1>User Information</h1>
      <p>{value.username}</p>
       <p>{value.password}</p>
      <button onClick={getUserInfo} > Get Info</button>

    </div>
  )
}

export default App