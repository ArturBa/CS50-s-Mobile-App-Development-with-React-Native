import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import ApiHelper from '../api/apiHelper';
import {Movie} from '../interfaces/Movie';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';

const MovieDetailsScreen = ({
  navigation,
  route: {
    params: {movieId},
  },
}: {
  navigation: any;
  route: {
    params: {
      movieId: string;
    };
  };
}) => {
  const [movie, setMovie] = useState({} as Movie);
  useEffect(() => {
    getMovie();
  });

  async function getMovie() {
    const movie = await ApiHelper.getMovie(movieId);
    setMovie(movie);
  }

  const handleImagePress = () => {
    const posterUri = {posterUri: movie.Poster};
    console.log(posterUri);

    navigation.push('Movie Poster', posterUri);
  };

  return movie ? (
    <View style={styles.movieDetails}>
      <View style={styles.imgTouch}>
        <TouchableHighlight onPress={() => handleImagePress()}>
          <Image style={styles.img} source={{uri: movie.Poster}} />
        </TouchableHighlight>
      </View>
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
  ) : (
    <Text>Something went wrong</Text>
  );
};

const styles = StyleSheet.create({
  movieDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  imgTouch: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: '100%',
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
