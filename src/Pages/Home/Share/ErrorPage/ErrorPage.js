import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';

import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    const {logOut}=useContext(AuthContext)
    const handleLogout = () => {
        logOut()
          .then(() => { })
          .catch(error => console.error(error))
      }
    return (
        <div className='py-4 text-center w-screen h-screen flex items-center justify-center'>
            <div className=''>
            <h2 className='text-3xl font-bold py-3'>Oops! An Error Occurred 😢</h2>
            {error && (
          <div>
            
            <h5 className='text-2xl text-red-600 font-semibold'>{error.status}</h5>
            <h5 className='text-3xl text-red-600 font-semibold'>{error.statusText || error.message}</h5>
            <h4 className='text-2xl py-5 font-semi-bold'>Please <Link to='/'>
            <button onClick={handleLogout} className='btn btn-primary btn-sm'>Sign Out</button>
            
            </Link></h4>
          </div>
        )}
            </div>
        </div>
    );
};

export default ErrorPage;