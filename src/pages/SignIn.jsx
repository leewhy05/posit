import { useState, useContext } from "react";
import "../styles/sign.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../assets/Postit 1.svg";
import { Link, useNavigate } from "react-router-dom";
import PostContext from "../context/PostContext";
import toast from 'react-hot-toast';


const SignIn = () => {
 const { setLoggedIn } = useContext(PostContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  async function Signin(e) {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    try {
      const res = await fetch("https://posit-ptta.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });
      const data = await res.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success(data.msg);
        // navigate away
        navigate("/HomeTwo");
        setLoggedIn(true);
      }
      if (
        data.msg === "all fields are required to login" ||
        data.errors.password === "Email or password is incorrect" ||
        data.errors.email === "Not a regitered email"
      ) {
        toast.error(data.msg || data.errors.password || data.errors.email);
      }
    } catch (error) {
      console.log(error.message);
      // alert(error.data.msg)
      // toast.error(error.data.msg)
    }
  }
  return (
    <div className="pt-5 body">
      <div className="container">
      <div className="text-center pt-5">
        <h1 className="text-center">Welcome Back</h1>
      </div>
      <div className="container">
        <Modal.Body>
          <Form>
            <Form.Group
              className="mt-5 mb-4"
              controlId="exampleForm.ControlInput1"
            >
              <h4 className="text-center">Your Email Address</h4>
              <Form.Control
              className=""
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <h4 className="text-center">Your Password</h4>
              <Form.Control
                type="password"
                placeholder="your password"
                autoFocus
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </Form.Group>
            <button
              onClick={Signin}
              className="btn btn text-light fs-5 w-100"
              style={{ backgroundColor: "#0086B0" }}
            >
              Sign In
            </button>
          </Form>
        </Modal.Body>
      </div>
      <div className="mt-3 fw-bold">
        <p className="text-center">
          No Account?
          <span>
            <Link to="/SignUp">Sign Up</Link>
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default SignIn;