import * as React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native-paper';

import { User } from '../redux/interfaces';

function HomeScreen({ users }: { users: User[] }) {
  return (
    <View style={HomeScreenStyles.view}>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item: user }) => <Text>{JSON.stringify(user)}</Text>}
      />
      <Text>Home!</Text>
      <Button onPress={() => {}}>Hi!</Button>
    </View>
  );
}

const HomeScreenStyles = StyleSheet.create({
  view: {
    // marginTop: StatusBar.currentHeight,
  },
});

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(HomeScreen);
