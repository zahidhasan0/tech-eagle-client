import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Register = () => {
  const { auth, signUP, error, setError, googleSignIn, GithubSignIn } =
    useContext(AuthProvider);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("You must need an uppercase letter");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("You must need a special character");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("You must need a special character");
      return;
    }

    signUP(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
        updateUserProfile(name, photourl);
        form.reset();
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });

    console.log(name, photourl, email, password);
  };

  const updateUserProfile = (name, photourl) => {
    updateProfile(auth.currentUser, { displayName: name, photoURL: photourl })
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn =()=>{
    GithubSignIn()
    .then(result=>{
        const user=result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))
  }

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
          <Form.Label sm={2}>Full Name</Form.Label>
          <br />
          <Col sm={10} className="">
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="name"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalphotourl"
        >
          <Form.Label sm={2}>Photo URL</Form.Label>
          <br />
          <Col sm={10} className="">
            <Form.Control
              type="photoURL"
              placeholder="Photo URL"
              name="photoURL"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label sm={2}>Email</Form.Label>
          <br />
          <Col sm={10} className="">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
            />
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
              required
            />
          </Col>
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{}} className="text-center mt-3">
            <Button className="text-center  " type="submit">
              Register
            </Button>
          </Col>
        </Form.Group>
        <p>
          Already have an account? <Link to="/login"> Login</Link>{" "}
        </p>
      </Form>

      <h6 className="text-center">or</h6>
      <button
        onClick={handleGoogleSignIn}
        className="text-white rounded-2 w-100 fw-semibold none border border-0 py-1 bg-primary"
      >
        {" "}
        <span className="text-white me-3">
          {" "}
          <FaGoogle />
        </span>{" "}
        Google Sign In
      </button>

      <h6 className="text-center">or</h6>
      <button
        onClick={handleGithubSignIn}
        className="text-white rounded-2 w-100 fw-semibold none border border-0 py-1 bg-primary"
      >
        {" "}
        <span className="text-white me-3">
          {" "}
          <FaGithub />
        </span>{" "}
        Github Sign In
      </button>
    </div>
  );
};

export default Register;
