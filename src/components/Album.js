import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AppContext } from '../App';
import styles from './Album.module.css';

function Album() {
  const { albumId } = useParams();
  const { photos, hasError } = useContext(AppContext);
  const albumPhotos = photos[albumId - 1];

  return (
    <div className={'Album'}>
      <main>
        <h1>Album {albumId}</h1>
        {!hasError && albumPhotos.length ? (
          <div className={styles.Tiles}>
            {albumPhotos.map(({ id, title, thumbnailUrl }) => (
              <Link className={styles.Tile} to={`photo/${id}`} key={id}>
                <h2 className={styles.TileHeading}>{title}</h2>
                <img src={thumbnailUrl} alt={title} />
              </Link>
            ))}
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default Album;
