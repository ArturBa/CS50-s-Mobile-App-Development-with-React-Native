import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {MovieSearch} from '../interfaces/Movie';
import ApiHelper from '../api/apiHelper';

const MovieListScreen = ({navigation}: {navigation: any}) => {
  const [searchTitle, setSearchTitle] = React.useState('');
  const [movieResult, setMovieResult] = useState([] as MovieSearch[]);
  const [page, setPage] = useState({page: 1, maxPage: 1});

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <TextInput
              maxLength={30}
              onChangeText={(text) => {
                setSearchTitle(text);
              }}
              value={searchTitle}
              placeholder="Search"
            />
            <Text onPress={getInitMovieResult}>Search</Text>
          </View>
        );
      },
    });
  });

  useEffect(() => {
    getMovieResult().then((newResults) => {
      setMovieResult(newResults);
    });
  }, [page]);

  async function getInitMovieResult(): Promise<void> {
    Keyboard.dismiss();
    setMovieResult([] as MovieSearch[]);
    setPage({
      page: 1,
      maxPage: await ApiHelper.getMoviesByNamePages(searchTitle),
    });
    debugger;
    nextPage();
  }

  async function getMovieResult(): Promise<MovieSearch[]> {
    if (searchTitle === '') {
      return [];
    }
    console.log(`getting data for: ${searchTitle}`);

    const movieResults = await ApiHelper.getMoviesByName(
      searchTitle,
      page.page,
    );
    let newMovieResults: MovieSearch[];
    if (!movieResults) {
      return movieResult;
    }
    if (page.page > 1) {
      newMovieResults = movieResult.concat(movieResults);
    } else {
      newMovieResults = movieResults;
    }
    return newMovieResults;
  }

  async function getMoreData(): Promise<void> {
    nextPage();
  }

  const nextPage = (): boolean => {
    if (page.page < page.maxPage) {
      setPage({page: page.page + 1, maxPage: page.maxPage});
      return true;
    }
    console.log('end of data');
    return false;
  };

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
