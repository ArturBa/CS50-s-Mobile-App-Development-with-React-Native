import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import MovieRow from './MovieRow';
import {MovieSearch} from '../interfaces/Movie';
import ApiHelper from '../api/apiHelper';

const ScrollViewMovies = ({
  movies,
  onSelectMovie,
  handleEndReached,
}: {
  movies: MovieSearch[];
  onSelectMovie: any;
  handleEndReached: any;
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({item}) => (
          <MovieRow movie={item} onSelectMovie={onSelectMovie} />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ScrollViewMovies;
