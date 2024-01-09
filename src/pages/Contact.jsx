import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
   <div className='container'>
    <hr />
     <br /> <br />
     <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formMessage">
        <Form.Label>Your Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group> <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br /><br />
   </div>
  );
}

export default Contact;