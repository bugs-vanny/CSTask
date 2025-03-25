import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import StarRating from './StarRating';
import GenreBadge from './GenreBadge';
import { ThemeContext } from '/Users/ivanr/Developer/MyTask/Apps/CSTask/context/ThemeContext.js'; // Ensure path is correct

const MovieInfo = ({ movie }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#037aff' }]}> 
      <Image source={{ uri: movie.Poster }} style={styles.poster} />

      <ScrollView style={[styles.infoContainer, { backgroundColor: darkMode ? '#333' : '#037aff' }]}>
        <Text style={[styles.title, { color: darkMode ? '#fff' : '#fff' }]}>{movie.Title} ({movie.Year})</Text>
        <StarRating rating={parseFloat(movie.imdbRating) / 2} />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.genreScrollView}
          contentContainerStyle={styles.genreContentContainer}
        >
          {movie.Genre.split(', ').map((genre) => (
            <GenreBadge key={genre} genre={genre} />
          ))}
        </ScrollView>

        <Text style={[styles.storylineHeader, { color: darkMode ? '#ccc' : '#fff' }]}>Storyline</Text>
        <Text style={[styles.storyline, { color: darkMode ? '#aaa' : '#fff' }]}>{movie.Plot}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  poster: {
    width: '100%',
    height: 350,
    objectFit: 'fill',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Bebas Neue',
    marginTop: -5,
  },
  genreScrollView: {
    marginVertical: 10,
  },
  genreContentContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    marginBottom: 5,
  },
  storylineHeader: {
    fontSize: 24,
    marginBottom: 5,
    fontFamily: 'Bebas Neue',
  },
  storyline: {
    fontSize: 14,
    fontFamily: 'Work Sans',
  },
});

export default MovieInfo;