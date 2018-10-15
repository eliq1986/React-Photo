import React from 'react';
import GalleryItem from './gallery-item';

import {css} from 'react-emotion';
// First way to import
import {ClipLoader} from 'react-spinners';

const override = css `
    display: block;
    margin: 0 auto;
    border-color: red;

`;

const Gallery = ({ photos, isLoading, searchQuery }) => {

  const flickrPhotos = photos;
  const arrayOfPhotos = flickrPhotos.map(photo => <GalleryItem farm={photo.farm} id={photo.id} key={photo.id} server={photo.server} secret={photo.secret} alt={photo.title}/>)


  // photoContainer component
  const photoContainer = (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {arrayOfPhotos}
    </ul>
  </div>
);



//loading spinner component
  const loadingSpinner = (
    <div className='sweet-loading'>
      <ClipLoader className={override} sizeUnit={"px"} size={100} color={'#b76e79'} loading={isLoading}/>
    </div>
  );



// no results component
  const noResults = (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Unfortunately, your seacrch didn't render anything.</p>
    </li>
  );


//checks if data received with loading indicator
  if (isLoading) {
    return loadingSpinner;
  } else if (!isLoading && photos.length < 1) {
    return noResults;
  } else {
    return photoContainer;
  }

};

export default Gallery;
