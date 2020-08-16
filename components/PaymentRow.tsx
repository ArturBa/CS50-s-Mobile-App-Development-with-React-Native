import * as React from 'react';
import { connect } from 'react-redux';
import { getUserByIdFromUsers } from '../utils/Users';
import { Payment, User } from '../redux/interfaces';
import { StyleSheet, View } from 'react-native';
import { Text, Surface, useTheme } from 'react-native-paper';
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
        <View style={PaymentRowStyle().row}>
          <Text style={PaymentRowStyle().value}>
            {payment.value.toFixed(2)}
          </Text>
          <View style={PaymentRowStyle().column}>
            <Text style={PaymentRowStyle().user}>{user.name}</Text>
            <Text style={PaymentRowStyle().comment}>{payment.comment}</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

const PaymentRowStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    surface: {
      marginTop: 12,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'stretch',
    },
    value: {
      fontSize: 40,
      marginRight: 10,
    },
    column: {},
    comment: {},
    user: { fontSize: 24, color: colors.primary },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(PaymentRow);
