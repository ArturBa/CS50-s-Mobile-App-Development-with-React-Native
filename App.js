import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Timer.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>In real time </Text>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
