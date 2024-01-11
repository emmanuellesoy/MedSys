import React, {useState, useEffect} from 'react';

import Wrapper from '../../components/Wrapper';
import List from '../../components/List/List';

import {getUsers} from '../../lib/api/users';

import {getAlbumsByUser} from '../../lib/api/albums';

type User = {
  id: number;
  username: string;
};

export default function Users({navigation}) {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      users.forEach(async (user: User) => {
        const data = await getAlbumsByUser(user.id);
        setAlbums(current => [
          ...current,
          {title: user.username, data, userId: user.id},
        ]);
      });
    }
  }, [users]);

  return (
    <Wrapper>
      <List data={albums} navigation={navigation} />
    </Wrapper>
  );
}
