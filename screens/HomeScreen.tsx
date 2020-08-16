import * as React from 'react';
import { connect } from 'react-redux';
import { Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

import NewPaymentForm from '../components/NewPaymentForm';

function HomeScreen() {
  return (
    <View style={HomeScreenStyles().view}>
      <NewPaymentForm />
    </View>
  );
}

const HomeScreenStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    view: {},
    segment: {
      backgroundColor: colors.surface,
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(HomeScreen);
