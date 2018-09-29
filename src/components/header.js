import React from 'react';
import Nav from './nav';
import Form from './form';

const Header = ({history,searchRequest}) => {
 return (
   <div>
     <Form searchRequest={searchRequest}/>
     <Nav  />
   </div>
     )
     }

export default Header;
