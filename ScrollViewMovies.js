import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
import Constants from 'expo-constants';

import Row from './MovieRow';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ScrollViewMovies = (props) => {
  const moviesByLetter = props.movies.reduce((obj, movie) => {
    const firstLetter = movie.Title[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), movie],
    };
  }, {});

  const sections = Object.keys(moviesByLetter)
    .sort()
    .map((letter) => ({
      data: moviesByLetter[letter],
      title: letter,
    }));

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.imdbID}
        renderItem={({item}) => (
          <Row movie={item} onSelectMovie={props.onSelectMovie} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

ScrollViewMovies.propTypes = {
  movies: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default ScrollViewMovies;
