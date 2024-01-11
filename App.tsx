/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableWithoutFeedback} from 'react-native';

import {Text, Image} from 'react-native';
const Star = require('./assets/img/star.png');
const FilledStar = require('./assets/img/star-filled.png');

import Users from './screens/Users';
import Album from './screens/Album';
import AllPhotos from './screens/AllPhotos';

const Stack = createNativeStackNavigator();

const StarIcon = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('AllPhotos')}>
      <Image width={45} height={45} source={Star} />
    </TouchableWithoutFeedback>
  );
};
const FilledStarIcon = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Image width={45} height={45} source={FilledStar} />
    </TouchableWithoutFeedback>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FBFFF4',
          },
          headerTintColor: '#011222',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen
          name="AllPhotos"
          component={AllPhotos}
          options={({navigation}) => ({
            title: 'All Photos',
            headerBackTitleVisible: false,
            headerRight: () => <FilledStarIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Album"
          component={Album}
          options={({route, navigation}) => ({
            title: route?.params?.title ?? '',
            headerRight: () => (
              <StarIcon route={route} navigation={navigation} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
