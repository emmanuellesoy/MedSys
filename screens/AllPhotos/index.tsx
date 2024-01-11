import React, {useState, useEffect} from 'react';

import Grid from '../../components/Grid';

import {getAllPhotos} from '../../lib/api/albums';

export default function AllPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAllPhotos().then(data => setPhotos(data));
  }, []);

  return <Grid photos={photos} />;
}
