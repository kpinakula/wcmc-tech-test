import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=300';

    fetch(url)
      .then(response => response.json())
      .then(photos => {
        const uniqueAlbumIds = [...new Set(photos.map(photo => photo.albumId))];
        let photosByAlbum = [];
        uniqueAlbumIds.forEach(albumId => {
          photosByAlbum.push(photos.filter(photo => photo.albumId === albumId));
        });
        setAlbums(photosByAlbum);
      })
      .catch(error => {
        setHasError(true);
        console.error('error', error);
      });
  };

  return (
    <div className="Gallery">
      <main>
        <h1>Gallery</h1>
        {!hasError && albums.length && (
          <div className="Album-tiles">
            {albums.map(album => {
              const coverPhoto = album[0];
              return (
                <Link
                  className="Album-tile"
                  to={`/album/${coverPhoto.albumId}`}
                  key={coverPhoto.albumId}
                >
                  <h2>Album {coverPhoto.albumId}</h2>
                  <img
                    className="Album-thumbnail"
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
