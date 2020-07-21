import React from 'react';
import {Text, View} from 'react-native';

export default class MovieDetailsScreen extends React.Component {
  render() {
    const movie = this.props.route.params.movie;
    return (
      <View>
        <Text>Movie details</Text>
        <Text>{movie.Title}</Text>
      </View>
    );
  }
}
