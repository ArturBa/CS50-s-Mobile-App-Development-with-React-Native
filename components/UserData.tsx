import * as React from 'react';

import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { User, Payment } from '../redux/interfaces';

const UserData = ({ user, payments }: { user: User; payments: Payment[] }) => {
  let userPayments = 0;
  debugger;
  if (payments.filter((p) => p.userId === user.id).length === 1) {
    userPayments = payments.filter((p) => p.userId === user.id)[0].value;
  } else if (payments.filter((p) => p.userId === user.id).length > 1) {
    userPayments = payments
      .filter((p) => p.userId === user.id)
      .reduce((a, b) => a.value + b.value);
  }

  return (
    <View style={UserDataStyles().context}>
      <Text style={UserDataStyles().user}>
        {user.name}: {userPayments.toFixed(2)}
      </Text>
    </View>
  );
};

export const UserDataStyles = () => {
  return StyleSheet.create({
    context: {
      padding: 20,
    },
    user: {
      fontSize: 20,
    },
  });
};

const mapStateToProps = (state: any) => ({
  payments: state.payment,
});
export default connect(mapStateToProps)(UserData);
