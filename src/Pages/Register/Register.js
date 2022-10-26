import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photourl=form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(name,photourl,email,password)
       
      };
    
      return (
        <div
          className=" mx-auto border p-4 m-3
         text-primary shadow-lg "
          style={{ width: "40%" }}
        >
          <h3 className="mb-5 w-75 mx-auto text-center border-4 pb-3 border-bottom border-primary">
            Please Register
          </h3>
    
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
              <Form.Label sm={2}>Name</Form.Label>
              <br />
              <Col sm={10} className="">
                <Form.Control type="text" placeholder="Name" name="name" />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalphotourl">
              <Form.Label sm={2}>Photo URL</Form.Label>
              <br />
              <Col sm={10} className="">
                <Form.Control type="text" placeholder="Photo URL" name="photoURL" />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label sm={2}>Email</Form.Label>
              <br />
              <Col sm={10} className="">
                <Form.Control type="email" placeholder="Email" name="email" />
              </Col>
            </Form.Group>
    
            <Form.Group
              as={Row}
              className="mb-3 "
              controlId="formHorizontalPassword"
            >
              <Form.Label sm={2}>Password</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Col>
            </Form.Group>
    
            <Form.Group as={Row} className="mb-3">
              <Col sm={{}} className="text-center mt-3">
                <Button className="text-center  " type="submit">
                  Register
                </Button>
              </Col>
            </Form.Group>
            <p>Already have an account? <Link to='/login'> Login</Link> </p>
          </Form>
        </div>
      );
};

export default Register;