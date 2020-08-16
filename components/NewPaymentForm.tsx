import * as React from 'react';

import { connect } from 'react-redux';
import {
  Button,
  HelperText,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import SegmentedControl from '@react-native-community/segmented-control';
import { View, StyleSheet, Keyboard } from 'react-native';

import store from '../redux/store';
import { addPayment } from '../redux/actions';
import { User } from '../redux/interfaces';
import { SnackBarType } from './SnackBar';

export interface FormObject {
  pristine: boolean;
  value: string;
}

const NewPaymentForm = ({
  users,
  paymentId,
  setSnackBar,
}: {
  users: User[];
  paymentId: number;
  setSnackBar: Function;
}) => {
  const [comment, setComment] = React.useState({
    pristine: true,
    value: '',
  } as FormObject);
  const [value, setValue] = React.useState({
    pristine: true,
    value: '',
  } as FormObject);
  const [userId, setUserId] = React.useState(Number);

  const { colors } = useTheme();

  const addPaymentFromForm = () => {
    setComment({ pristine: false, value: comment.value });
    setValue({ pristine: false, value: value.value });
    if (comment.value === '' || isNaN(parseFloat(value.value))) {
      setSnackBar({
        visible: true,
        text: 'Check the form',
        type: SnackBarType.ERROR,
      });
      return;
    }

    console.log(parseFloat(value.value));

    const dateNow = new Date().toISOString().slice(0, 10);
    store.dispatch(
      addPayment({
        id: paymentId,
        value: parseFloat(value.value),
        comment: comment.value,
        userId: userId + 1,
        date: dateNow,
      })
    );
    Keyboard.dismiss();
    setSnackBar({ visible: true, text: 'Payment added' });
    setComment({ pristine: true, value: '' });
    setValue({ pristine: true, value: '' });
  };

  return (
    <View>
      <Text style={NewPaymentFormStyle().title}>New Payment</Text>
      <SegmentedControl
        style={NewPaymentFormStyle().segments}
        activeTextColor={colors.primary}
        textColor={colors.text}
        tintColor={colors.surface}
        values={users.map((user) => user.name)}
        selectedIndex={userId}
        onChange={(event) => {
          setUserId(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <TextInput
        label="Value"
        value={value.value.toString()}
        keyboardType="numeric"
        onBlur={() => setValue({ pristine: false, value: value.value })}
        onChangeText={(text: string) => {
          setValue({ pristine: value.pristine, value: text });
        }}
      />
      <HelperText
        type="error"
        visible={isNaN(parseFloat(value.value)) && !value.pristine}
      >
        Value must be a number
      </HelperText>
      <TextInput
        label="Comment"
        value={comment.value}
        onBlur={() => setComment({ pristine: false, value: comment.value })}
        onChangeText={(text: string) => {
          setComment({ pristine: comment.pristine, value: text });
        }}
      />
      <HelperText
        type="error"
        visible={comment.value === '' && !comment.pristine}
      >
        Comment is required
      </HelperText>
      <Button
        mode="contained"
        onPress={() => {
          addPaymentFromForm();
        }}
      >
        Submit a new payment
      </Button>
    </View>
  );
};

const NewPaymentFormStyle = () => {
  return StyleSheet.create({
    title: {
      fontSize: 30,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 10,
    },
    segments: {
      backgroundColor: '#7f7f7f',
      height: 38,
    },
  });
};

const mapStateToProps = (state: any) => ({
  users: state.user,
  paymentId: state.payment.length + 1,
});
export default connect(mapStateToProps)(NewPaymentForm);
