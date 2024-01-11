import React, {useEffect, useState} from 'react';

import Grid from '../../components/Grid';

import {getAlbumPhotos} from '../../lib/api/albums';

import {Props} from '../../types/album';

export default function Album({route}: Props) {
  const [photos, setPhotos] = useState([]);
  const [id] = useState(route?.params?.id ?? 0);

  useEffect(() => {
    if (id > 0) {
      getAlbumPhotos(id).then(data => setPhotos(data));
    }
  }, [id]);
  return <Grid photos={photos} />;
}
