import * as React from 'react';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { User } from '../redux/interfaces';

const UserData = ({ user }: { user: User }) => {
  return (
    <View>
      <Text>User: {user.name}</Text>
    </View>
  );
};

export default UserData;
