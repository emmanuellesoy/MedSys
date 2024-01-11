import React from 'react';
import {SectionList} from 'react-native';

import Header from '../Header';
import Item from '../Item';

const List = ({data}: any) => {
  console.log('data', data.length);
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item.userId + index}
      renderItem={({item}) => <Item text={item.title} onPress={() => {}} />}
      renderSectionHeader={({section: {title}}) => <Header text={title} />}
    />
  );
};

export default List;
