import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Payment } from '../redux/interfaces';
import PaymentRow from '../components/PaymentRow';
import HistoryStackScreen from './HistoryStackScreen';

function HistoryScreen({
  payments,
  navigation,
}: {
  payments: Payment[];
  navigation: any;
}) {
  const [refreshing, setRefreshing] = React.useState(false);
  function handleShowDetail(payment: Payment) {
    navigation.push('Details', { payment: payment });
  }

  const refreshData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        style={HistoryScreenStyles().list}
        data={payments}
        refreshing={refreshing}
        onRefresh={refreshData}
        keyExtractor={(payment) => payment.id}
        renderItem={({ item: payment }) => (
          <PaymentRow payment={payment} handleShowDetails={handleShowDetail} />
        )}
      />
    </View>
  );
}

const HistoryScreenStyles = () => {
  return StyleSheet.create({
    list: {
      width: '90%',
    },
  });
};

const mapStateToProps = (state: any) => ({
  payments: state.payment,
});
export default connect(mapStateToProps)(HistoryScreen);
