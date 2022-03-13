import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Gallery from './Gallery';
import { AppContext } from '../App';

test('renders correct h1', () => {
  const value = { photos: [], hasError: false };

  render(
    <AppContext.Provider value={value}>
      <Gallery />
    </AppContext.Provider>
  );
  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toHaveTextContent(/Gallery/i);
});

test('renders correct number of Links', () => {
  const value = {
    photos: [
      [
        {
          albumId: 1,
          id: 1,
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://www.unep-wcmc.org/',
        },
      ],
      [
        {
          albumId: 2,
          id: 1,
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://www.unep-wcmc.org/',
        },
      ],
    ],
    hasError: false,
  };

  render(
    <AppContext.Provider value={value}>
      <Router>
        <Gallery />
      </Router>
    </AppContext.Provider>
  );
  const linkElements = screen.getAllByRole('link');
  expect(linkElements).toHaveLength(value.photos.length);
});

test('renders correct album heading', () => {
  const value = {
    photos: [
      [
        {
          albumId: 1,
          id: 1,
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://www.unep-wcmc.org/',
        },
      ],
    ],
    hasError: false,
  };

  render(
    <AppContext.Provider value={value}>
      <Router>
        <Gallery />
      </Router>
    </AppContext.Provider>
  );
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toHaveTextContent(/Album 1/i);
});
