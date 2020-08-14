import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';

import MovieRow from './MovieRow';
import {MovieSearch} from '../interfaces/Movie';

const ScrollViewMovies = ({
  movies,
  onSelectMovie,
}: {
  movies: MovieSearch[];
  onSelectMovie: any;
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieRow movie={item} onSelectMovie={onSelectMovie} />
        )}
      />
    </SafeAreaView>
  );
};

ScrollViewMovies.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {},
});

export default ScrollViewMovies;
