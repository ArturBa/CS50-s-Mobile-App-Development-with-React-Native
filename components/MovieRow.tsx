import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {padding: 20},
});

const Row = (props) => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectMovie(props)}>
    <Text>{props.movie.Title}</Text>
  </TouchableOpacity>
);

Row.propTypes = {
  movie: PropTypes.any,
};

export default Row;
