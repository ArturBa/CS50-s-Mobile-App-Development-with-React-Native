import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import MovieDetailsScreen from './screens/MovieDetailsScreen';
import MovieListScreen from './screens/MovieListScreen';
import MoviePosterScreen from './screens/MoviePosterScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie List" component={MovieListScreen} />
      <Stack.Screen name="Movie Details" component={MovieDetailsScreen} />
      <Stack.Screen name="Movie Poster" component={MoviePosterScreen} />
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
