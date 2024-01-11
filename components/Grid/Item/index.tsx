import React from 'react';
import {View, Dimensions, Image} from 'react-native';

type Item = {
  id: number;
  thumbnailUrl: string;
};

export default function Item({item}: {item: Item}) {
  const width = Math.floor(Dimensions.get('window').width / 3);

  return (
    <View>
      <Image
        width={width}
        height={width}
        source={{
          uri: item?.thumbnailUrl ?? 'https://via.placeholder.com/150',
        }}
      />
    </View>
  );
}
