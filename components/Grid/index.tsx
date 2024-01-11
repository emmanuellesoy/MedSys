import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Item from './Item';
import {getAlbumPhotos} from '../../lib/api/albums';

const styles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: 400,
  },
  item: {
    flex: 1,
    maxWidth: '25%', // 100% devided by the number of rows you want
    alignItems: 'center',

    // my visual styles; not important for the grid
    padding: 10,
    backgroundColor: 'rgba(249, 180, 45, 0.25)',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});

type Props = {
  id: number;
};

export default function Grid({id}: Props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (id > 0) {
      getAlbumPhotos(id).then(data => setPhotos(data));
    }
  }, [id]);

  return (
    <View style={styles.app}>
      <FlatList
        data={photos}
        numColumns={3}
        renderItem={Item}
        keyExtractor={(item, index) => `photo-${item.id}-${index}`}
      />
    </View>
  );
}
