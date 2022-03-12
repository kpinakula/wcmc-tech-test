import React from 'react';
import { Link } from 'react-router-dom';

function Album() {
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
