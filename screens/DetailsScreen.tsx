import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { Payment } from '../redux/interfaces';

function DetailsScreen({
  route: {
    params: { payment },
  },
}: {
  route: { params: { payment: Payment } };
}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

export default DetailsScreen;
