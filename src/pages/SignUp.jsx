import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from 'react-hot-toast';



const SignUp = () => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setpassword] = useState('')
  const navigate = useNavigate()

 async function Register(e){
  e.preventDefault()
  try {
    const regData = {
      email,
      name,
      password,
    }

 
  const res = await fetch('https://posit-ptta.onrender.com/api/register', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(regData),
      });
      const data = await res.json();
      console.log(data);
      if(data.msg === 'registration successful'){
        toast.success(data.msg)

        navigate('/SignIn')
      }
      if(data.msg === 'all fields are required to register' || data.errors.password === 'password min length must be 8'|| data.errors.email === "Please provide a valid email" || data.errors.email === "Email address already in use"|| data.errors.name === "min length for username is 4"){
        toast.error(data.msg || data.errors.password || data.errors.email || data.errors.name)
      }

  } catch (errors) {
    if(errors){
      // alert(errors.errors)
      return
    }
    console.log(errors);
    
  }
  

  }



  return (
   <div className="">
     <div className="container mt-5">
      <h2 className="text-center">Register with <span style={{color:'#0086B0'}}>POSIT</span></h2>
      <form className="w-50 m-auto mt-5" >
        <label htmlFor="name">Username:</label><br />
        <input onChange={(e)=> setName(e.target.value)}  value={name} className="w-100 border border-2 border-success"  type="text" name="" id="firstname" /><br /><br />
        <label htmlFor="email">Email:</label><br />
        <input onChange={(e)=> setEmail(e.target.value) } value={email} className="w-100  border border-2 border-success" type="email" name="" id="email" /><br /><br />
        <label htmlFor="name">Password:</label><br />
        <input onChange={(e)=> setpassword(e.target.value) }  value={password} className="w-100  border border-2 border-success"  type="password" name="" id="password" /><br /><br />
       <div className="d-flex justify-content-center">
       <input className="btn btn-primary w-50 " type="submit" value="Register" onClick={Register}/>
       
       </div>
       <div className="mt-3 fw-bold">
        <p className="text-center">
          already have an Account?
          <span>
            <Link to="/SignIn">Sign In</Link>
          </span>
        </p>
      </div>
      </form>
       
    </div>

   </div>
  );
};

export default SignUp