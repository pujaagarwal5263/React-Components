import React, { createContext } from 'react';
import CompB from './CompB';

const MyName = createContext();
const LastName = createContext();
const CompA = () => {
    return (
    <MyName.Provider value={'Puja'}>
    <LastName.Provider value={'Agarwal'}>
    <CompB />
    </LastName.Provider>
    </MyName.Provider>);
}

export default CompA;
export {MyName,LastName};