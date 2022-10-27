import React, { useContext } from 'react';

import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';


const Home = () => {

    const {isToggle,setIsToggle}=useContext(AuthProvider)
    return (
       <div className= {isToggle ? ' text-dark' : ' text-white false'}>
        <div className= {isToggle ? 'd-flex   py-5 text-dark' : 'd-flex  py-5 text-white false'}  >
        <div className='mx-4 p-4'>

            <img className='w-100 rounded ' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg' alt=''/>
        </div>

        <div className='mt-5 '>
            <h2 className='fw-bold mb-3 '>Learn Programming <br></br> Create Awesome Things.</h2>
            <p>
            “when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.”
            </p>
            <h6 className='ms-5'> - Why The Lucky Stiff</h6>
            <button className='border-0 py-2 px-4 mt-3 bg-dark text-light rounded '><Link to='/courses' className='text-decoration-none text-white'>Get Strated</Link> </button>
        </div>
       </div>
       </div>
    );
};

export default Home;