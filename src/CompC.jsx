import React from 'react';
import {LastName, MyName} from './CompA';

const CompC = () => {
    return (
    
    <MyName.Consumer>
    {(name)=> {
        <LastName.Consumer>
        {(lname) => {
       return (<h1>This is {name} {lname} here</h1>);
         }}
       </LastName.Consumer>
    }}
    </MyName.Consumer>
    
    );
}

export default CompC;