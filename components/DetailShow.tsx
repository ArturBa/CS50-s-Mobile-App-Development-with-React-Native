import * as React from 'react';
import { Surface, Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export interface DetailsShowInterface {
  title: string;
  value: string;
}

function DetailsShow({ detail }: { detail: DetailsShowInterface }) {
  return (
    <Surface style={DetailsShowStyle().context}>
      <Text style={DetailsShowStyle().title}>{detail.title}:</Text>
      <Text style={DetailsShowStyle().value}>{detail.value}</Text>
    </Surface>
  );
}

const DetailsShowStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    context: {
      padding: 12,
      margin: 12,
    },
    title: {
      color: colors.primary,
      fontSize: 40,
    },
    value: {
      paddingLeft: 40,
      fontSize: 34,
    },
  });
};

export default DetailsShow;
