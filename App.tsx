/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import List from './components/List/List';

const getAlbums = async (id: number) => {
  return await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('error', error));
};

type User = {
  id: number;
  username: string;
};

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log('error', error));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      users.forEach(async (user: User) => {
        const data = await getAlbums(user.id);
        setAlbums(current => [...current, {title: user.username, data}]);
      });
    }
  }, [users]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <List data={albums} />
    </SafeAreaView>
  );
}

export default App;
