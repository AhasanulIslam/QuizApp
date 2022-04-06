import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="app-wrapper">
      <Form onSubmit={handleSubmit} >
        
        <div className='email'>
          <Form.Group size="lg" controlId="email" className='from-wrapper'>
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control
            className='input'
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </Form.Group>
        </div>
        
        <div className="password">

        <Form.Group size="lg" controlId="password" className='from-wrapper'>
          <Form.Label className='label'>Password</Form.Label>
          <Form.Control 
            className='input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        </div>
        <Button block size="lg" type="submit" disabled={!validateForm()} className='submit'>
          Login
        </Button>
      </Form>
      </div>
    </div>
  );
}