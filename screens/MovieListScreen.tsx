import React from 'react';
import {View} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {search} from '../mockData';

const MovieListScreen = (props) => {
  const handleMovieDetails = (movieId: string) => {
    movieId = 'id';
    props.navigation.push('Movie Details', {movieId: movieId});
  };

  return (
    <View>
      <ScrollViewMovies
        movies={search.Search}
        onSelectMovie={handleMovieDetails}
      />
    </View>
  );
};

export default MovieListScreen;
