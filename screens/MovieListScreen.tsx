import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {MovieSearch} from '../interfaces/Movie';
import ApiHelper from '../api/apiHelper';

const MovieListScreen = ({navigation}: {navigation: any}) => {
  const [movieResult, setMovieResult] = useState([] as MovieSearch[]);
  let searchTitle: string;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <TextInput
              maxLength={30}
              onChangeText={(text) => (searchTitle = text)}
              value={searchTitle}
              placeholder="Search"
            />
            <Text onPress={getMovieResult}>Search</Text>
          </View>
        );
      },
    });
  }, [navigation]);

  const handleMovieDetails = (movieId: string) => {
    navigation.push('Movie Details', {movieId: movieId});
  };

  async function getMovieResult() {
    const movieResult = await ApiHelper.getMoviesByName(searchTitle);
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
