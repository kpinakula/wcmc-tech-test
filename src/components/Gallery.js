import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div className="Gallery">
      <main>
        Gallery
        <Link to="/album/1">Album 1</Link>
        <Link to="/album/2">Album 2</Link>
      </main>
    </div>
  );
}

export default Gallery;
