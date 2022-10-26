import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    let location = useLocation();
    const {user,loading}=useContext(AuthProvider)

    if(loading){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;