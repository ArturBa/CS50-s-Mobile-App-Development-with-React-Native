import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {padding: 20},
});

const Row = (props) => (
  <TouchableOpacity style={styles.row}>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);

Row.propTypes = {
  title: PropTypes.string,
};

export default Row;
