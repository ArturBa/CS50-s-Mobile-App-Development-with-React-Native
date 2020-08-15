import * as React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';

import { Payment } from '../redux/interfaces';
import PaymentRow from '../components/PaymentRow';

function HistoryScreen({ payments }: { payments: Payment[] }) {
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
          <PaymentRow payment={payment} />
        )}
      />
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  payments: state.payment,
});
export default connect(mapStateToProps)(HistoryScreen);
