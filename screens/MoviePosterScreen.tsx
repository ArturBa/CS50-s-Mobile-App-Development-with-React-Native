import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const MoviePosterScreen = ({
  route: {
    params: {posterUri: posterUri},
  },
}: {
  route: {
    params: {
      posterUri: string;
    };
  };
}) => {
  return (
    <View style={moviePosterStyles.movieDetails}>
      <Image
        style={moviePosterStyles.img}
        resizeMode="contain"
        source={{uri: posterUri}}
      />
    </View>
  );
};

const moviePosterStyles = StyleSheet.create({
  movieDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default MoviePosterScreen;
