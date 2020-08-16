import * as React from 'react';
import { connect } from 'react-redux';
import { useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

import NewPaymentForm from '../components/NewPaymentForm';
import SnackBar, {
  SnackBarInterface,
  SnackBarType,
} from '../components/SnackBar';
import CurrentStatus from '../components/CurrentStatus';

function HomeScreen() {
  const [snackBar, setSnackBar] = React.useState({
    visible: false,
    text: '',
    type: SnackBarType.INFO,
  } as SnackBarInterface);
  return (
    <View style={HomeScreenStyles().view}>
      <CurrentStatus />
      <NewPaymentForm setSnackBar={setSnackBar} />
      <SnackBar snackBar={snackBar} setSnackBar={setSnackBar} />
    </View>
  );
}

const HomeScreenStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    view: {
      flex: 1,
      width: '90%',
      alignSelf: 'center',
    },
    segment: {
      backgroundColor: colors.surface,
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(HomeScreen);
