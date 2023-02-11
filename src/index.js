import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CompA from './CompA';
import Contact from './Contact';
import './index.css';
import Login from './Login';

ReactDOM.render(
  <>
    <BrowserRouter>
    <Login />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

