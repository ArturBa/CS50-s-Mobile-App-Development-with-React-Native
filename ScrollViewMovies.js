import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types';

import Constants from 'expo-constants';

import Row from './MovieRow';

const ScrollViewMovies = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.movies}
        renderItem={({item}) => (
          <Row movie={item} onSelectMovie={props.onSelectMovie} />
        )}
      />
    </SafeAreaView>
  );
};

ScrollViewMovies.propTypes = {
  movies: PropTypes.array,
};

const styles = StyleSheet.create({});

export default ScrollViewMovies;
