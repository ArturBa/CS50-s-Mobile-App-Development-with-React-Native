import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {movie} from '../mockData';

const MovieDetailsScreen = () => {
  // TODO: add movie from props
  // const movie = this.props.route.params.movie;
  return (
    <View style={styles.movieDetails}>
      <Image style={styles.img} source={{uri: movie.Poster}} />
      <View style={styles.movieText}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>Year: {movie.Year}</Text>
        <Text style={styles.director}>Director: {movie.Director}</Text>
        <Text style={styles.imdb}>
          IMDB: {movie.imdbRating}/10 ({movie.imdbVotes} votes)
        </Text>
        <Text style={styles.plotTitle}>Plot: </Text>
        <Text style={styles.plotContent}>{movie.Plot}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    flex: 1,
    padding: 20,
  },
  movieText: {
    flex: 2,
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  year: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 25,
  },
  director: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
  },
  imdb: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
  },
  plotTitle: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
  },
  plotContent: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
  },
});

export default MovieDetailsScreen;
