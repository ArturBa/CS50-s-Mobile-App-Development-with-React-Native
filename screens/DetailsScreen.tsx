import * as React from 'react';
import { connect } from 'react-redux';
import { Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

import { Payment, User } from '../redux/interfaces';
import { getUserByIdFromUsers } from '../utils/Users';
import DetailsShow from '../components/DetailShow';

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
    <View style={DetailsScreenStyle().context}>
      <DetailsShow detail={{ value: user.name, title: 'User' }} />
      <DetailsShow
        detail={{ value: payment.value.toFixed(2), title: 'Value' }}
      />
      <DetailsShow detail={{ value: payment.comment, title: 'Comment' }} />
      <DetailsShow detail={{ value: payment.date, title: 'Date' }} />
    </View>
  );
}

const DetailsScreenStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    context: {
      flex: 1,
      alignSelf: 'center',
      marginTop: 50,
      width: '90%',
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(DetailsScreen);
