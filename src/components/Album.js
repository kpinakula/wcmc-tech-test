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
        <Link to="photo/1">Album 1, Photo 1</Link>
        <Link to="photo/2">Album 1, Photo 2</Link>
      </main>
    </div>
  );
}

export default Album;
