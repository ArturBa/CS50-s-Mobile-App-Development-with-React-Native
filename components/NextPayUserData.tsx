import * as React from 'react';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { User, Payment } from '../redux/interfaces';
import { UserDataStyles } from './UserData';
import { connect } from 'react-redux';
import { getUserByIdFromUsers } from '../utils/Users';

const NextPayUserData = ({
  users,
  payments,
}: {
  users: User[];
  payments: Payment[];
}) => {
  if (payments.length === 0) {
    return (
      <View style={UserDataStyles().context}>
        <Text style={UserDataStyles().user}>
          Next payment: No payments in base
        </Text>
      </View>
    );
  }
  const paymentsSorted = payments.sort((a, b) => a.value - b.value);
  const user = getUserByIdFromUsers(paymentsSorted[0].userId, users);

  const paymentDiff = () => {
    return paymentsSorted[1].value - paymentsSorted[0].value;
  };
  return (
    <View style={UserDataStyles().context}>
      <Text style={UserDataStyles().user}>
        Next payment: {user.name} -{'>'} ({paymentDiff()})
      </Text>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  payments: state.payment,
  users: state.user,
});
export default connect(mapStateToProps)(NextPayUserData);
