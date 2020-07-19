import React from 'react';
import {Button, Text, View} from 'react-native';

import ScrollViewMovies from './ScrollViewMovies';
import {search} from '../mockData';

export default class MovieListScreen extends React.Component {
  render() {
    return (
      <View>
        <ScrollViewMovies movies={search.Search}></ScrollViewMovies>
      </View>
    );
  }
}
