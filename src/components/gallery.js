import React from 'react';
import GalleryItem from './gallery-item';
import NoResults from './no-results';
import { css}  from 'react-emotion';
// First way to import
import {ClipLoader} from 'react-spinners';


const override = css `
    display: block;
    margin: 0 auto;
    border-color: red;
`;


const Gallery = ({ photos, isLoading, searchQuery }) => {

  const flickrPhotos = photos;

  const arrayOfPhotos = flickrPhotos.map(photo =>
    <GalleryItem
    farm={photo.farm}
    id={photo.id}
    key={photo.id}
    server={photo.server}
    secret={photo.secret}
    alt={photo.title}
    />)


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
  const LoadingSpinner = (
    <div className='sweet-loading'>
      <ClipLoader className={override} sizeUnit={"px"} size={100} color={'#b76e79'} loading={isLoading}/>
    </div>
  );




//checks if data received with loading indicator
  if (isLoading) {
    return LoadingSpinner;
  } else if (!isLoading && photos.length < 1) {
    return NoResults;
  } else {
    return photoContainer;
  }

};

export default Gallery;
