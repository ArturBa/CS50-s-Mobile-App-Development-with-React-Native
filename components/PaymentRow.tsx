import * as React from 'react';
import { connect } from 'react-redux';
import { getUserByIdFromUsers } from '../utils/Users';
import { Payment, User } from '../redux/interfaces';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme, Surface } from 'react-native-paper';
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
      <Surface style={PaymentRowStyle().surface}>
        <Text style={PaymentRowStyle().value}>{payment.value}</Text>
        <Text>{payment.comment}</Text>
      </Surface>
    </TouchableOpacity>
  );
};

const PaymentRowStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    surface: {
      margin: 8,
      padding: 8,
      height: 80,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
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
