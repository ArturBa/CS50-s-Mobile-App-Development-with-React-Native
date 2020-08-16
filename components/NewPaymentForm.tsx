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
import { View, StyleSheet } from 'react-native';

import store from '../redux/store';
import { addPayment } from '../redux/actions';
import { User } from '../redux/interfaces';

export interface FormObject {
  pristine: boolean;
  value: string;
}

const NewPaymentForm = ({ users }: { users: User[] }) => {
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
      return;
    }
    const dateNow = new Date().toString().slice(0, 10);
    store.dispatch(
      addPayment({
        id: 0,
        value: parseFloat(value.value),
        comment: comment.value,
        userId: userId + 1,
        date: dateNow,
      })
    );
    setComment({ pristine: true, value: '' });
    setValue({ pristine: true, value: '' });
  };

  console.log(comment);

  return (
    <View>
      <Text style={NewPaymentFormStyle().title}>New Payment</Text>
      <SegmentedControl
        style={NewPaymentFormStyle().segments}
        activeTextColor="#bb86fc"
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
        onChangeText={(text: string) => {
          setValue({ pristine: false, value: text });
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
        onChangeText={(text: string) => {
          setComment({ pristine: false, value: text });
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
  const { colors } = useTheme();
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
});
export default connect(mapStateToProps)(NewPaymentForm);
