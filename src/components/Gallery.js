import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';
import styles from './Gallery.module.css';

function Gallery() {
  const { photos, hasError } = useContext(AppContext);

  return (
    <main>
      <h1>Gallery</h1>
      {!hasError && photos.length ? (
        <div className={styles.Tiles}>
          {photos.map(album => {
            const coverPhoto = album[0];
            return (
              <Link
                className={styles.Tile}
                to={`/album/${coverPhoto.albumId}`}
                key={coverPhoto.albumId}
              >
                <h2>Album {coverPhoto.albumId}</h2>
                <img src={coverPhoto.thumbnailUrl} alt={coverPhoto.title} />
              </Link>
            );
          })}
        </div>
      ) : null}
    </main>
  );
}

export default Gallery;
