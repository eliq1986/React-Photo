import React from 'react';
import GalleryItem from './gallery-item';

const Gallery = ({ photos }) => {

  const flickrPhotos = photos;
  const arrayOfPhotos = flickrPhotos.map(photo => <GalleryItem  farm={photo.farm} id={photo.id} key={photo.id} server={photo.server} secret={photo.secret} alt={photo.title} />)

  if (photos.length === 0) {
    return (
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    )
  }


  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {arrayOfPhotos}
      </ul>
    </div>
  );
};


export default Gallery;
