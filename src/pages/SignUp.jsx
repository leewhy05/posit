import React from "react";
import "../styles/sign.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Logo from "../assets/Postit 1.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bod">
      <Form>
        <div className="container">
          <div className="d-flex pt-4 gap-2 align-items-center justify-content-center text-center move">
            <h2 className="text-center pt-2">Join </h2>
            <img src={Logo} alt="Logo" className="" />
          </div>

          <div className="text-center pt-5  ">
            <h3 className="fs-5 d-flex justify-content-center gap-2 ">
              Enter your email address to create account on
              <img src={Logo} alt="" className="logo" />
            </h3>
          </div>
        </div>

        <div className="container mt-5">
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <h4 className="text-center">Username</h4>
            <Form.Control type="name" placeholder="username" autoFocus className="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h4 className="text-center">Your Email Address</h4>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password.ControlInput1">
            <h4 className="text-center mt-4">Your Password</h4>
            <Form.Control type="password" placeholder="password" autoFocus />
          </Form.Group>
          <button
            className="btn btn text-light fs-5 w-100"
            style={{ backgroundColor: "#0086B0" }}
          >
            Sign Up
          </button>
        </div>

        <div className="mt-3 fw-bold">
          <p className="text-center">
            Already have an account?{" "}
            <span>
              <Link to="/SignIn">Sign In</Link>
            </span>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
