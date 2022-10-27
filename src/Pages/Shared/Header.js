import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {  FaMoon, FaSignOutAlt, FaSun,  } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Header = () => {

  
  //useContext from the AuthContext
  const { user, logOut, isToggle, setIsToggle } = useContext(AuthProvider);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  

  const handleToggleMood = () => {
   setIsToggle(!isToggle)
  };

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className={isToggle ? "text-white align-items-center" : "bg-dark mb-3 text-white align-items-center"}

          // className={({ isToggle }) => (isToggle ? "mb-3 text-white align-items-center" : "bg-dark mb-3 text-white align-items-center")}
          
        >
          <Container fluid>
            <img
              style={{ height: "50px" }}
              src="https://media.istockphoto.com/photos/graphic-digital-eagle-flying-connection-technology-concept-picture-id1155816684?b=1&k=20&m=1155816684&s=170667a&w=0&h=3Rn1G5A052tsGaffVHwLw9ta3S8VB1c73DU0LDICVSI="
              alt=""
            ></img>
            <Navbar.Brand className="fw-bold ">
              {" "}
              <Link to="/" className="text-decoration-none ms-2 fs-3">
                TechEagle
              </Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="fw-bold"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fw-semibold  ">
                  <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none me-4 border-3 border-bottom border-primary' : 'text-decoration-none me-4')}  to="/courses">
                    Courses
                  </NavLink>

                  <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none me-4 border-3 border-bottom border-primary' : 'text-decoration-none me-4')} to="/faq">
                    FAQ
                  </NavLink>

                  <NavLink className={({ isActive }) => (isActive ? 'text-decoration-none me-4 border-3 border-bottom border-primary' : 'text-decoration-none me-4')} to="/blog">
                    Blog
                  </NavLink>

                  {isToggle ? (
                    <NavLink
                      onClick={handleToggleMood}
                      className="text-decoration-none me-4 text-dark"
                      to="#action2"
                      title="dark mode"
                    > <FaMoon/>
                      
                    </NavLink>
                  ) : (
                    <NavLink
                      onClick={handleToggleMood}
                      className="text-decoration-none me-4 text-warning"
                      to="#action2"
                      title="light mode"
                    >
                      <FaSun/>
                    </NavLink>
                  )}

                  {user && user.uid ? (
                    <>
                      <button
                        className="border-0 fw-semibold text-primary mt-0 me-4 px-3 p-0"
                        onClick={handleSignOut} title='sign out'
                      >
                        <FaSignOutAlt></FaSignOutAlt>
                      </button>
                      <Link>
                        <img title={user.displayName}
                          className="rounded-circle"
                          style={{ height: "40px" }}
                          src={user.photoURL}
                          alt=""
                        ></img>
                      </Link>
                    </>
                  ) : (
                    <NavLink className="text-decoration-none me-4" to="/login">
                      Login
                    </NavLink>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
