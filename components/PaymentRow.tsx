import * as React from 'react';
import { Text, useTheme, List, DataTable } from 'react-native-paper';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Payment, User } from '../redux/interfaces';
import { getUserByIdFromUsers } from '../utils/Users';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PaymentRow = ({
  payment,
  handleShowDetails,
  users,
}: {
  payment: Payment;
  handleShowDetails: any;
  users: User[];
}) => {
  const user: User = getUserByIdFromUsers(payment.userId, users);

  return (
    <TouchableOpacity
      onPress={() => {
        handleShowDetails(payment);
      }}
    >
      <View style={PaymentRowStyle().row}>
        <Text style={PaymentRowStyle().value}>{payment.value}</Text>
        <Text>{payment.comment}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PaymentRowStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    row: {
      margin: 8,
      backgroundColor: colors.surface,
    },
    value: {
      fontSize: 22,
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(PaymentRow);
