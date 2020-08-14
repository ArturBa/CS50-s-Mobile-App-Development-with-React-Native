import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {MovieSearch} from '../interfaces/Movie';

const styles = StyleSheet.create({
  row: {padding: 20},
});

const MovieRow = ({
  movie,
  onSelectMovie,
}: {
  movie: MovieSearch;
  onSelectMovie: any;
}) => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => onSelectMovie(movie.imdbID)}>
    <Text>{movie.Title}</Text>
  </TouchableOpacity>
);

MovieRow.propTypes = {
  movie: PropTypes.any,
};

export default MovieRow;
