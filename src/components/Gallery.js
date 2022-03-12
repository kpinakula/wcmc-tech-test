import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
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
        Gallery
        {!hasError && photos.length && (
          <div>
            <Link to="/album/1">Album 1</Link>
            <Link to="/album/2">Album 2</Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Gallery;
