import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Postit 1.svg";
import Group from "../assets/unsplash_Z2bJeJQRbW0.svg";

const HomeTwo = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  let getUser = async () =>{
    let response = await fetch('https://posit-ptta.onrender.com/api/user', {
      method:'GET',
      headers:{
        Authorization : `Bearer ${token}`,
        'Content-Type': 'application/json'
        
        },
    })
    let data = await response.json()
    setUser(data.name);
    console.log(data.name);
  }
   useEffect(()=>{
    getUser()
   },[])

  return (
    <div className="noe">
      <div className="container mt-5">
        <div className=" row align-items-center justify-content-between">
          <div className="col-lg-5 fs-5 nap">
            <h1>Welcome <span style={{color:'#0086B0'}}>{user}</span>
            </h1>

            <p>
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.
            </p>
            <div className="d-flex gap-3">
              <button
                style={{ backgroundColor: "#0086b0" }}
                className="btn btn fs-4 text-light w-100"
              >
                <Link
                  to="/AllStories"
                  className="text-decoration-none text-light"
                >
                  <h4>My Stories</h4>
                </Link>
              </button>
              <button
                className="btn btn fs-4 w-100"
                style={{ backgroundColor: "#0086B0" }}
              >
                <Link
                  to="/CreateStory"
                  className="text-decoration-none text-light"
                >
                  <h4>Create Story</h4>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={Group} alt="Group" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
