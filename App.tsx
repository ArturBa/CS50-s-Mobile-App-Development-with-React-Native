import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HistoryStackScreen from './screens/HistoryStackScreen';
import HomeScreen from './screens/HomeScreen';

const AppTab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppTab.Navigator>
        <AppTab.Screen name="Home" component={HomeScreen} />
        <AppTab.Screen name="History" component={HistoryStackScreen} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
