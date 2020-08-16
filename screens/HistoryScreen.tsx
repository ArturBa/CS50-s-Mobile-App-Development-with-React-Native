import * as React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Payment } from '../redux/interfaces';
import PaymentRow from '../components/PaymentRow';

function HistoryScreen({
  payments,
  navigation,
}: {
  payments: Payment[];
  navigation: any;
}) {
  function handleShowDetail(payment: Payment) {
    navigation.push('Details', { payment: payment });
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        data={payments}
        keyExtractor={(payment) => payment.id}
        renderItem={({ item: payment }) => (
          <PaymentRow payment={payment} handleShowDetails={handleShowDetail} />
        )}
      />
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  payments: state.payment,
});
export default connect(mapStateToProps)(HistoryScreen);
