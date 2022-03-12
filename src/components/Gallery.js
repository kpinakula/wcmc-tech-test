import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';

function Gallery() {
  const { photos, hasError } = useContext(AppContext);

  return (
    <div className="Gallery">
      <main>
        <h1>Gallery</h1>
        {!hasError && photos.length && (
          <div className="Tiles">
            {photos.map(album => {
              const coverPhoto = album[0];
              return (
                <Link
                  className="Tile"
                  to={`/album/${coverPhoto.albumId}`}
                  key={coverPhoto.albumId}
                >
                  <h2>Album {coverPhoto.albumId}</h2>
                  <img
                    className="Thumbnail"
                    src={coverPhoto.thumbnailUrl}
                    alt={coverPhoto.title}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default Gallery;
