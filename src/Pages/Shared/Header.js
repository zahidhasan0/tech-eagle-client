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
  const {user,logOut}=useContext(AuthProvider)

  const handleSignOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }

    return (
        <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} bg="light"  expand={expand} className="mb-3 text-white">
          <Container fluid>
          <img style={{height: '50px'}} src='https://media.istockphoto.com/photos/graphic-digital-eagle-flying-connection-technology-concept-picture-id1155816684?b=1&k=20&m=1155816684&s=170667a&w=0&h=3Rn1G5A052tsGaffVHwLw9ta3S8VB1c73DU0LDICVSI=' alt=''></img>
            <Navbar.Brand  className='fw-bold ' > <Link  to='/' className='text-decoration-none ms-2 fs-3'>TechEagle</Link> </Navbar.Brand>
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
                  <button onClick={handleSignOut}> Sign Out </button>

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