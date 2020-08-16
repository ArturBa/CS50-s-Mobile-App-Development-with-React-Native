import * as React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export interface SnackBarInterface {
  visible: boolean;
  text: string;
  type: SnackBarType;
}

export enum SnackBarType {
  INFO,
  ERROR,
}

const SnackBar = ({
  snackBar,
  setSnackBar,
}: {
  snackBar: SnackBarInterface;
  setSnackBar: Function;
}) => {
  const handleDismissSnackbar = () => {
    setSnackBar({ visible: false });
  };

  let style;
  if (snackBar.type === SnackBarType.ERROR) {
    style = SnackBarStyle().error;
  }
  return (
    <Snackbar
      style={style}
      visible={snackBar.visible}
      onDismiss={handleDismissSnackbar}
    >
      {snackBar.text}
    </Snackbar>
  );
};

const SnackBarStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    error: {
      backgroundColor: '#cf6679',
    },
  });
};

export default SnackBar;
