import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
// const User = ({match}) => {
//     return <h1>Apka bahot bahot swagat hai {match.params.name} ji !</h1>
// }
const User = () => {
    const {fname, lname}=useParams();
    const location = useLocation();
    const history = useHistory();
    return (
    <>
    <h1>Apka bahot bahot swagat hai {fname} {lname} ji !</h1>
    <p>My current location is {location.pathname}</p>
    {location.pathname === `/user/Welcome/User`? 
    <>
    <button onClick={()=> history.goBack()}>Go Back</button>
    <button onClick={()=> history.push('/')}>Go Home</button>
    </> : null}
    </>
    );
}
export default User;