import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gallery from './components/Gallery';
import Album from './components/Album';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import './App.css';

export const AppContext = createContext({});

function App() {
  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=300';

    fetch(url)
      .then(response => response.json())
      .then(photos => {
        const uniqueAlbumIds = [...new Set(photos.map(photo => photo.albumId))];
        let photosByAlbum = [];
        uniqueAlbumIds.forEach(albumId => {
          photosByAlbum.push(photos.filter(photo => photo.albumId === albumId));
        });
        setPhotos(photosByAlbum);
      })
      .catch(error => {
        setHasError(true);
        console.error('error: ', error);
      });
  }, []);

  return (
    <AppContext.Provider value={{ photos, hasError }}>
      <Router>
        <div className="App">
          <header className="App-header">Header</header>
          <Routes>
            <Route exact path="/" element={<Gallery />} />
            <Route exact path="album/:albumId" element={<Album />} />
            <Route
              exact
              path="album/:albumId/photo/:photoId"
              element={<Photo />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
