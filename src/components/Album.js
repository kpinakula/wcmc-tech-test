import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Album() {
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);
  const { albumId } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=300&albumId=${albumId}`;

    fetch(url)
      .then(response => response.json())
      .then(photos => setPhotos(photos))
      .catch(error => {
        setHasError(true);
        console.error('error', error);
      });
  }, [albumId]);

  return (
    <div className="Album">
      <main>
        <h1>Album {albumId}</h1>
        {!hasError && photos.length && (
          <div className="Tiles">
            {photos.map(photo => (
              <Link className="Tile" to={`photo/${photo.id}`} key={photo.id}>
                <h2>{photo.title}</h2>
                <img
                  className="Thumbnail"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Album;
