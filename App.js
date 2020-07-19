import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import MovieListScreen from './screens/MovieListScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie List" component={MovieListScreen} />
      <Stack.Screen name="Movie details" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
}
