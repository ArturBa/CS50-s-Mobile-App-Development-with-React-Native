import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {MovieSearch} from '../interfaces/Movie';
import ApiHelper from '../api/apiHelper';

const MovieListScreen = ({navigation}: {navigation: any}) => {
  let searchTitle: string = 'this is not a';
  const [movieResult, setMovieResult] = useState([] as MovieSearch[]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  // let page: number;
  // let maxPage: number;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <TextInput
              maxLength={30}
              onChangeText={(text) => {
                console.log(text);
                searchTitle = text;
              }}
              value={searchTitle}
              placeholder="Search"
            />
            <Text onPress={getInitMovieResult}>Search</Text>
          </View>
        );
      },
    });
  }, [navigation]);

  useEffect(() => {
    getMovieResult();
  }, [page]);

  async function getInitMovieResult(): Promise<void> {
    Keyboard.dismiss();
    setMaxPage(await ApiHelper.getMoviesByNamePages(searchTitle));
    console.log('init');

    setPage(1);
    setPage(page + 1);
  }

  async function getMovieResult(): Promise<void> {
    const movieResults = await ApiHelper.getMoviesByName(searchTitle, page);
    let newMovieResults: MovieSearch[];
    console.log(page);

    if (page > 1) {
      newMovieResults = movieResult.concat(movieResults);
    } else {
      newMovieResults = movieResults;
    }
    setMovieResult(newMovieResults);
  }

  async function getMoreData(): Promise<void> {
    if (page === maxPage || movieResult.length === 0) {
      console.log('end reached');
    } else {
      setPage(page + 1);
    }
  }

  const handleMovieDetails = (movieId: string) => {
    navigation.push('Movie Details', {movieId: movieId});
  };

  return (
    <View>
      <ScrollViewMovies
        movies={movieResult}
        onSelectMovie={handleMovieDetails}
        handleEndReached={getMoreData}
      />
    </View>
  );
};

export default MovieListScreen;
