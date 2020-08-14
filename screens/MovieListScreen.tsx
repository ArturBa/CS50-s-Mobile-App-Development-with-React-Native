import React from 'react';
import {View} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {search} from '../mockData';

const MovieListScreen = (props) => {
  const handleMovieDetails = (movie) => {
    props.navigation.push('Movie Details', movie);
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
