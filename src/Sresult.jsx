import React from 'react';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/500x500/?${props.name}`;
 return(
     <div>
       <img src={img} alt="not found"/>  
     </div>
 );
}

export default Sresult;