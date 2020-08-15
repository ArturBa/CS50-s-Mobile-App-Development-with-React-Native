import * as React from 'react';
import { Text, useTheme, List, DataTable } from 'react-native-paper';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Payment, User } from '../redux/interfaces';
import { getUserByIdFromUsers } from '../utils/Users';

const PaymentRow = ({
  payment,
  users,
}: {
  payment: Payment;
  users: User[];
}) => {
  const user: User = getUserByIdFromUsers(payment.userId, users);

  return (
    <View>
      <Text>{payment.value}</Text>
      <Text>{payment.comment}</Text>
    </View>
  );
};

const PaymentRowStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    row: { margin: 14 },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(PaymentRow);
