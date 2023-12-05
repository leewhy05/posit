import React from 'react'
import '../styles/sign.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Logo from '../assets/Postit 1.svg'
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='pt-5 body'>
          <div className='text-center pt-5' >
            <h1 className='text-center'>Welcome Back</h1>
          </div>
      <div className='container'>
      <Modal.Body>
          <Form>
            <Form.Group className="mt-5 mb-4" controlId="exampleForm.ControlInput1">
              <h4 className='text-center'>Your Email Address</h4>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Password"
            >
              <h4 className='text-center'>Your Password</h4>
              <Form.Control
                type="password"
                placeholder="your password"
                autoFocus
              />
              
            </Form.Group>
            <button className='btn btn text-light fs-5 w-100' style={{ backgroundColor: "#0086B0" }}>Sign In</button>
          </Form>
        </Modal.Body>
      </div>
      <div className='mt-3 fw-bold'>
      <p className='text-center'>No Account? <span><Link to='/SignUp'>Sign Up</Link></span></p>
      </div>
    </div>
  )
}

export default SignIn