import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from './DetailsScreen';
import HistoryScreen from './HistoryScreen';

const HistoryStack = createStackNavigator();

export default function HistoryNavigationScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={HistoryScreen} />
      <HistoryStack.Screen name="Details" component={DetailsScreen} />
    </HistoryStack.Navigator>
  );
}
