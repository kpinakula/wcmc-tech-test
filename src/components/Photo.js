import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../App';
import styles from './Photo.module.css';

function Photo() {
  const { albumId, photoId } = useParams();
  const { photos, hasError } = useContext(AppContext);
  const photo = photos[albumId - 1]?.find(
    photo => photo.id === Number(photoId)
  );

  return (
    <div>
      <main>
        {!hasError && photo ? (
          <div>
            <h1>{photo.title}</h1>
            <img className={styles.Photo} src={photo.url} alt={photo.title} />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default Photo;
