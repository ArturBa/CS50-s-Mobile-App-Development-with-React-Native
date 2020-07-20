import React from 'react';
import {Button, Text, View} from 'react-native';

import ScrollViewMovies from '../ScrollViewMovies';
import {search} from '../mockData';

export default class MovieListScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('AddContact')}
          color="#a41034"
        />
      ),
    };
  };

  handleMovieDetails = (movie) => {
    this.props.navigation.push('Movie Details', movie);
  };

  render() {
    return (
      <View>
        <ScrollViewMovies
          movies={search.Search}
          onSelectMovie={this.handleMovieDetails}
        />
      </View>
    );
  }
}
