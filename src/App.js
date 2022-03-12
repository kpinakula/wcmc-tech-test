import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gallery from './components/Gallery';
import Album from './components/Album';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
