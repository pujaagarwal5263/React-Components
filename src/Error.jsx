import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
   return (
   <>
   <h1>Oops! Error 404</h1>
   <NavLink to='/'>Go Back</NavLink>
   </>);
}

export default Error;