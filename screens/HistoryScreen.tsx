import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Payment } from '../redux/interfaces';
import { connect } from 'react-redux';
import Constants from 'expo-constants';

import { Text } from 'react-native-paper';

function HistoryScreen({ payments }: { payments: Payment[] }) {
  // TODO: fix status bar overlapping
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <FlatList
        data={payments}
        keyExtractor={(payment) => payment.id}
        renderItem={({ item: payment }) => (
          <Text>{JSON.stringify(payment)}</Text>
        )}
      />
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  payments: state.payment,
});
export default connect(mapStateToProps)(HistoryScreen);
