import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Item from './Item';

const styles = StyleSheet.create({
  app: {
    flex: 4,
    marginHorizontal: 'auto',
    width: 400,
  },
});

export default function Grid({photos = []}) {
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
