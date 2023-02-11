import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Navbar from './Navbar';
import Services from './Services';
import User from './User';
import Search from './Search';

const Login = () => {
    const Name = () => {
        return <h1>my name is visitor</h1>;
    }
  return(
      <>
      <Menu />
      <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/services' render={() => <Services name="Puja" />} />
          {/* 1. jab props pass krna h to render nhi to component use krlo
               2. render sirf update krta h while component poore code ko reload 
                   krte h
               3. No performance diff in render and component */}
          <Route path='/contact/name' component={Name} />
          <Route exact path='/user/:fname/:lname' component={User} />
          {/*<Route component={Error} />*/}
          <Redirect to='/' />
      </Switch>
      {/* {<About />
      <Contact />} */}
      </>
  );
}

export default Login;