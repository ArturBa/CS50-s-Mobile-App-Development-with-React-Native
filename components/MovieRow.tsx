import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {MovieSearch} from '../interfaces/Movie';

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

const styles = StyleSheet.create({
  row: {padding: 20},
});

export default MovieRow;
