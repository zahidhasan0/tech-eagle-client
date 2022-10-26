import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaDAndD, FaUser, MdDarkMode } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';


const Header = () => {
  //useContext from the AuthContext
  const {user}=useContext(AuthProvider)

    return (
        <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
          <img style={{height: '50px'}} src='https://www.logologo.com/logos/eagle-logo-design-free-logo.jpg' alt=''></img>
            <Navbar.Brand  className='fw-bold text-primary' > <Link  to='/' className='text-decoration-none ms-2 fs-3'>TechEaggle</Link> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='fw-bold' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3 fw-semibold  ">

                  <NavLink className='text-decoration-none me-4' to="/courses">Courses</NavLink>

                  <NavLink className='text-decoration-none me-4' to="/faq">FAQ</NavLink>

                  <NavLink className='text-decoration-none me-4' to="/blog">Blog</NavLink>

                  <NavLink className='text-decoration-none me-4' to="#action2">Dark Mode</NavLink>

                  <NavLink className='text-decoration-none me-4' to="/login">Login</NavLink>

                  {user && user.uid ?   <img className='rounded-circle' style={{height: '40px'}} src={user.photoURL} alt=''></img> : <NavLink className='text-decoration-none me-4' to="/login">Login</NavLink> }
                 
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