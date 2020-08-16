import * as React from 'react';

import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { User, Payment } from '../redux/interfaces';

const UserData = ({ user, payments }: { user: User; payments: Payment[] }) => {
  const reducePayments = (): number => {
    let userPayments = 0;
    const filteredPayments = payments.filter((p) => p.userId === user.id);
    filteredPayments.map((pay) => (userPayments += pay.value));
    return userPayments;
  };
  const userPayments = reducePayments();

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
