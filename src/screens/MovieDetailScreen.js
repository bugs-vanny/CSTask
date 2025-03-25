// MovieDetailScreen.js

import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import MovieInfo from '../components/Movie/MovieInfo';
import { ThemeContext } from '../context/ThemeContext';

const MovieDetailScreen = ({ route }) => {
  const { imdbID } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetchMovieDetails();
  }, [imdbID]);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=ce9440d9&i=${imdbID}`);
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color={darkMode ? '#fff' : '#000'} />;
  }

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      {movie ? (
        <MovieInfo movie={movie} textStyle={{ color: darkMode ? '#fff' : '#000' }} />
      ) : (
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>Movie details not available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetailScreen;