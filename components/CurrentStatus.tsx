import * as React from 'react';
import { connect } from 'react-redux';
import { Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { Payment, User } from '../redux/interfaces';
import UserData from './UserData';

function CurrentStatus({
  users,
  payments,
}: {
  users: User[];
  payments: Payment[];
}) {
  //   const user = getUserByIdFromUsers(payment.userId, users);
  const userPayments = users.map((user) => {
    return payments
      .filter((p) => p.userId === user.id)
      .reduce((a, b) => a.value + b.value, { value: 0 });
  });
  console.log(userPayments);

  return (
    <Surface style={CurrentStatusStyles().surface}>
      {users.map((user: User) => (
        <UserData user={user} />
      ))}
    </Surface>
  );
}

const CurrentStatusStyles = () => {
  return StyleSheet.create({
    surface: {
      height: 100,
      marginTop: 24,
      marginBottom: 24,
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
  payments: state.payment,
});
export default connect(mapStateToProps)(CurrentStatus);
