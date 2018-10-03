import React from 'react';
import Nav from './nav';
import Form from './form';


// header component
const Header = ({ searchRequest }) => {
 return (
   <div>
     <Form searchRequest={searchRequest}/>
     <Nav  />
   </div>
     )
     }

export default Header;
