import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Keyboard, StyleSheet} from 'react-native';

import ScrollViewMovies from '../components/ScrollViewMovies';
import {MovieSearch} from '../interfaces/Movie';
import ApiHelper from '../api/apiHelper';
import Icon from 'react-native-vector-icons/Ionicons';

const MovieListScreen = ({navigation}: {navigation: any}) => {
  const [searchTitle, setSearchTitle] = React.useState('');
  const [movieResult, setMovieResult] = useState([] as MovieSearch[]);
  const [page, setPage] = useState({page: 1, maxPage: 1});

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.searchSection}>
            <TextInput
              style={styles.searchInput}
              maxLength={30}
              onChangeText={(text) => {
                setSearchTitle(text);
              }}
              value={searchTitle}
              placeholder="Search"
            />
            <Text onPress={getInitMovieResult}>
              <Icon name="ios-search" size={30} style={styles.searchIcon} />
            </Text>
          </View>
        );
      },
    });
  });

  useEffect(() => {
    getMovieResult().then((newResults) => {
      setMovieResult(newResults);
      if (page.page === 1) {
        nextPage();
      }
    });
  }, [page]);

  async function initPage(): Promise<void> {
    const maxPageApi = await ApiHelper.getMoviesByNamePages(searchTitle);
    setPage({page: 1, maxPage: maxPageApi});
  }

  async function getInitMovieResult(): Promise<void> {
    Keyboard.dismiss();
    setMovieResult([] as MovieSearch[]);
    initPage();
  }

  async function getMovieResult(): Promise<MovieSearch[]> {
    if (searchTitle === '') {
      return [];
    }

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

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default MovieListScreen;
