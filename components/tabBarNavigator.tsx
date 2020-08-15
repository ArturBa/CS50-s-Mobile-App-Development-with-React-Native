import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import HistoryStackScreen from '../screens/HistoryStackScreen';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'history', title: 'History', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    history: HistoryStackScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
