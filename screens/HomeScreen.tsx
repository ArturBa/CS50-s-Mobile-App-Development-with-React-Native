import * as React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Button, Text } from 'react-native-paper';

function HomeScreen({ users }: { users: any[] }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

const mapStateToProps = (state: any) => ({
  users: state.user,
});
export default connect(mapStateToProps)(HomeScreen);
