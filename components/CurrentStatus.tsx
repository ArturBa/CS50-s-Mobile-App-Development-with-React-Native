import * as React from 'react';
import { connect } from 'react-redux';
import { Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { User } from '../redux/interfaces';
import UserData from './UserData';
import NextPayUserData from './NextPayUserData';

function CurrentStatus({ users }: { users: User[] }) {
  return (
    <Surface style={CurrentStatusStyles().surface}>
      {users.map((user: User) => (
        <UserData user={user} />
      ))}
      <NextPayUserData />
    </Surface>
  );
}

const CurrentStatusStyles = () => {
  return StyleSheet.create({
    surface: {
      marginTop: 24,
      marginBottom: 24,
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(CurrentStatus);
