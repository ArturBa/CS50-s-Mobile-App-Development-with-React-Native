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
  valid: boolean;
  value: string;
}

const NewPaymentForm = ({ users }: { users: User[] }) => {
  const [comment, setComment] = React.useState({
    valid: true,
    value: '',
  } as FormObject);
  const [value, setValue] = React.useState({
    valid: true,
    value: '',
  } as FormObject);
  const [userId, setUserId] = React.useState(Number);

  const { colors } = useTheme();

  const required = (formObject: FormObject) => {
    if (formObject.value !== '') {
      formObject.valid = false;
    } else {
      formObject.valid = true;
    }
  };

  const addPaymentFromForm = () => {
    if (!comment.valid || !value.valid) {
      return;
    }
    store.dispatch(
      addPayment({
        id: 0,
        value: parseFloat(value.value),
        comment: comment.value,
        userId: userId,
        date: '2020-02-02',
      })
    );
  };

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
          required(value);
          setValue({ valid: value.valid, value: text });
        }}
      />
      <HelperText type="error" visible={!value.valid}>
        Value is required
      </HelperText>
      <TextInput
        label="Comment"
        value={comment.value}
        onChangeText={(text: string) => {
          required(comment);
          setComment({ valid: comment.valid, value: text });
        }}
      />
      <HelperText type="error" visible={!comment.valid}>
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
