import React from 'react';
import GalleryItem from './gallery-item';

import { css } from 'react-emotion';
// First way to import
import { ClipLoader } from 'react-spinners';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Gallery = ({ photos, isLoading }) => {
console.log(photos.length)
  const flickrPhotos = photos;
  const arrayOfPhotos = flickrPhotos.map(photo => <GalleryItem  farm={photo.farm} id={photo.id} key={photo.id} server={photo.server} secret={photo.secret} alt={photo.title} />)

  const photoContainer = (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {arrayOfPhotos}
      </ul>
    </div>

  );

  const loadingSpinner = (
    <div className='sweet-loading'>
      <ClipLoader
        className={override}
        sizeUnit={"px"}
        size={150}
        color={'#ff7373'}
        loading={isLoading}
      />
    </div>
        )

        const noResults = (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        )


if (isLoading) {
  return loadingSpinner;
} else if (!isLoading && photos.length <1 ) {
  return noResults;
} else {
  return photoContainer;
}


};






export default Gallery;
