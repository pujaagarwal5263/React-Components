import React, { useContext } from 'react';
import {MyName,LastName} from './CompA';
import CompC from './CompC';

const CompB = () => {
    const name= useContext(MyName);
    const lname= useContext(LastName);
    return (<h1>This is {name} {lname}  here</h1>);
}

export default CompB;