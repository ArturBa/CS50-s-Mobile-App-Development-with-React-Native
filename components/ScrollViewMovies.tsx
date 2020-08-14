import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';

import Row from './MovieRow';

const ScrollViewMovies = ({movies, onSelectMovie}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Row movie={item} onSelectMovie={onSelectMovie} />
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
