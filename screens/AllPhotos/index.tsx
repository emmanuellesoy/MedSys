import React, {useState, useEffect} from 'react';

import Grid from '../../components/Grid';

import {getAllPhotos} from '../../lib/api/albums';

export default function AllPhotos() {
  const [photos, setPhotos] = useState([]);
  console.log('yeah!!!');

  useEffect(() => {
    getAllPhotos().then(data => setPhotos(data));
  }, []);

  console.log('photos', photos);

  return <Grid photos={photos} />;
}
