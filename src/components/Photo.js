import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../App';

function Photo() {
  const { albumId, photoId } = useParams();
  const { photos, hasError } = useContext(AppContext);
  const photo = photos[albumId - 1]?.find(
    photo => photo.id === Number(photoId)
  );

  return (
    <div className="Photo">
      <main>
        {!hasError && photo && <img src={photo.url} alt={photo.title} />}
      </main>
    </div>
  );
}

export default Photo;
