import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Users from './screens/Users';
import Album from './screens/Album';

const Stack = createNativeStackNavigator();

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
          name="Album"
          component={Album}
          options={({route}) => ({title: route?.params?.title ?? ''})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
