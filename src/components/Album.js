import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AppContext } from '../App';

function Album() {
  const { albumId } = useParams();
  const { photos, hasError } = useContext(AppContext);
  const albumPhotos = photos[albumId - 1];

  return (
    <div className="Album">
      <main>
        <h1>Album {albumId}</h1>
        {!hasError && albumPhotos.length && (
          <div className="Tiles">
            {albumPhotos.map(({ id, title, thumbnailUrl }) => (
              <Link className="Tile" to={`photo/${id}`} key={id}>
                <h2>{title}</h2>
                <img className="Thumbnail" src={thumbnailUrl} alt={title} />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Album;
