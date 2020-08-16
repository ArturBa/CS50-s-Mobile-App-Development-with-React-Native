import * as React from 'react';

import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { User, Payment } from '../redux/interfaces';

const UserData = ({ user, payments }: { user: User; payments: Payment[] }) => {
  let userPayments = 0;
  if (payments.filter((p) => p.userId === user.id).length > 0) {
    userPayments = payments
      .filter((p) => p.userId === user.id)
      .reduce((a, b) => a.value + b.value, { value: 0 });
  }
  console.log(userPayments);

  return (
    <View style={UserDataStyles().context}>
      <Text style={UserDataStyles().user}>
        {user.name}: {userPayments}
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
