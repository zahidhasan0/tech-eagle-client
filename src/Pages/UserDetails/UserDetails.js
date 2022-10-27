import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';


const UserDetails = () => {
    const {user}=useContext(AuthProvider)
    console.log(user)
    
    return (
       
                
           
            <div className='m-5 p-5'>
            <div className='w-25 d-flex mx-auto p-3 border'>
           <div>
               <img className='img-fluid w-100 rounded ' src={user?.photoURL} alt=''/>
           </div>
           <div className='ms-2'>
           <h6>name: <span className='fw-bold fs-4'>{user?.displayName}</span> </h6>
           <p> email: {user?.email}</p>
           <p className='fw-semibold'>{user?.providerId} </p>
           </div>
          </div>
           </div>
           
            
        
        
    );
};

export default UserDetails;