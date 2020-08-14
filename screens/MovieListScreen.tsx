import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {MovieSearch} from '../interfaces/Movie';
import ApiHelper from '../api/apiHelper';

const MovieListScreen = (props) => {
  const handleMovieDetails = (movieId: string) => {
    props.navigation.push('Movie Details', {movieId: movieId});
  };

  const [movieResult, setMovieResult] = useState([] as MovieSearch[]);
  useEffect(() => {
    getMovieResult();
  }, []);

  async function getMovieResult() {
    const movieResult = await ApiHelper.getMoviesByName('guardians');
    setMovieResult(movieResult);
  }

  return (
    <View>
      <ScrollViewMovies
        movies={movieResult}
        onSelectMovie={handleMovieDetails}
      />
    </View>
  );
};

export default MovieListScreen;
