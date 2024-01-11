import React from 'react';
import {SectionList} from 'react-native';

import Header from '../Header';
import Item from '../Item';

const List = ({data, navigation}: any) => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item.userId + index}
      renderItem={({item}) => (
        <Item
          text={item.title}
          onPressText={() => {
            navigation.navigate('Album', {
              id: item.id,
              title: item.title,
              userId: item.userId,
            });
          }}
          onPress={() => null}
        />
      )}
      renderSectionHeader={({section: {title}}) => <Header text={title} />}
    />
  );
};

export default List;
