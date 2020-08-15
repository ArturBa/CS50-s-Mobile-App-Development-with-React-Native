import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useTheme } from 'react-native-paper';

function HomeScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button onPress={() => {}}>Hi!</Button>
    </View>
  );
}

export default HomeScreen;
