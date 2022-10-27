import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userEmail, setUserEmail] = useState(null);
  const {
    signIn,
    error,
    setError,
    googleSignIn,
    GithubSignIn,
    facebookSignIn,
    forgottenPassword,
  } = useContext(AuthProvider);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    setUserEmail(email);
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        console.log(form);
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error);
        console.error(error);
        return;
      });
  };

  const handleResetPassword = () => {
    forgottenPassword(userEmail)
      .then((result) => {
        toast.success("check your email for password reset.");
      })
      .catch((error) => {
        setError(error);
        console.log(error)
        return;
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    GithubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className=" mx-auto border p-4 m-3
     text-primary shadow-lg "
      style={{ width: "40%" }}
    >
      <h3 className="mb-5 w-75 mx-auto text-center border-4 pb-3 border-bottom border-primary">
        Please login
      </h3>

      <Form onSubmit={handleSubmit}>
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
        <p className="text-danger">{error?.message}</p>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{}} className="text-center mt-3">
            <Button className="text-center  " type="submit">
              Sign in
            </Button>
          </Col>
        </Form.Group>
        <p>
          Forgot password?{" "}
          <button
            onClick={handleResetPassword}
            className="border-0 text-secondary "
          >
            {" "}
            reset password
          </button>{" "}
        </p>
        <p>
          Don't have any account? <Link to="/register"> Register</Link>{" "}
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

      <h6 className="text-center">or</h6>
      <button
        onClick={handleFacebookSignIn}
        className="text-white rounded-2 w-100 fw-semibold none border border-0 py-1 bg-primary"
      >
        {" "}
        <span className="text-white me-3">
          {" "}
          <FaFacebook />
        </span>{" "}
        Facebook Sign In
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
