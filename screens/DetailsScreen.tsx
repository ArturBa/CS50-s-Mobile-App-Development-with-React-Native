import * as React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import { Payment, User } from '../redux/interfaces';
import { getUserByIdFromUsers } from '../utils/Users';

function DetailsScreen({
  route: {
    params: { payment },
  },
  users,
}: {
  route: { params: { payment: Payment } };
  users: User[];
}) {
  const user = getUserByIdFromUsers(payment.userId, users);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{payment.value}</Text>
      <Text>{user.name}</Text>
      <Text>{payment.comment}</Text>
      <Text>{payment.date}</Text>
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(DetailsScreen);
