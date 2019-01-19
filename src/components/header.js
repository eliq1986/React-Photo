import React from 'react';
import Nav from './nav';
import Form from './form';
import Title from './title';


// header component
const Header = ({ searchRequest }) => {
 return (
   <div>
     <Title />
     <Form searchRequest={searchRequest}/>
     <Nav  />
   </div>
   );
  }

export default Header;
