import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Menu = () => {
   return (
   <>
    <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink>
    <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>
    <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink>
    <NavLink exact activeClassName="active_class" to='/user/Welcome/User'>User</NavLink>
    <NavLink exact activeClassName="active_class" to='/services'>Our Services</NavLink>
   </>);
}

export default Menu;