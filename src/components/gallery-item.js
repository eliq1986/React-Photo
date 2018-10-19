import React from 'react';

// individual photo component
const GalleryItem = ({farm, server, id, secret, title}) => {
  
const customFlickrURL = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg
`;
  return (
  <li>
    <img src={customFlickrURL} alt={title}/>
  </li>
);

}

export default GalleryItem;
