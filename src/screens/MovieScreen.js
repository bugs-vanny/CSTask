// MovieScreen.js

import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

import { Dimensions } from 'react-native';

import StyledText from '../components/StyledText';

// Import Redux (theme)
import { selectDarkMode } from '../redux/ThemeSlice';
import { useSelector } from 'react-redux';


const { width } = Dimensions.get('window');

const MovieHomeScreen = ({ navigation }) => {
  const darkMode = useSelector(selectDarkMode);
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [numColumns, setNumColumns] = useState(2);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=ce9440d9&s=${search || 'Batman'}`);
      
      if (response.data.Response === 'False') {
        throw new Error(response.data.Error);
      }

      const movieList = response.data.Search || [];
      const detailedMovies = await Promise.all(movieList.map(async (movie) => {
        const detailsResponse = await axios.get(`https://www.omdbapi.com/?apikey=ce9440d9&i=${movie.imdbID}`);

        if (detailsResponse.data.Response === 'False') {
          throw new Error(detailsResponse.data.Error);
        }

        return {
          ...movie,
          imdbRating: detailsResponse.data.imdbRating,
          Plot: detailsResponse.data.Plot,
        };
      }));

      setMovies(detailedMovies);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleNumColumns = () => {
    setNumColumns((prevNumColumns) => (prevNumColumns === 1 ? 2 : 1));
  };

  const toggleSearchVisibility = () => {
    setSearchVisible((prevVisible) => !prevVisible);
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const renderStars = (count, icon, color, opacity = 1) => (
      [...Array(count)].map((_, index) => (
        <FontAwesomeIcon
          key={`${icon}-${index}`}
          icon={icon}
          size={15}
          color={color}
          style={{ opacity }}
        />
      ))
    );

    return (
      <View style={styles.starContainer}>
        {renderStars(fullStars, faStar, '#FFD700')}
        {renderStars(halfStars, faStarHalf, '#F5B530')}
        {renderStars(emptyStars, faStar, '#F5B530', 0.3)}
      </View>
    );
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { imdbID: item.imdbID })}>
       <View style={[
      styles.card,
      { 
        width: numColumns === 1 ? width - 30 : (width / 2) - 30,
        backgroundColor: darkMode ? '#444' : '#037aff', 
      }
    ]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.Poster }} style={[styles.image, { backgroundColor: darkMode ? 'black' : '#0E2F63' }]} />
      </View>
      <Text style={[styles.cardTitle, { color: darkMode ? '#000' : '#fff' }]}>
        {item.Title} ({item.Year}) </Text>
      <StarRating rating={parseFloat(item.imdbRating) / 2} />
        <Text style={styles.plot} numberOfLines={2}>
          {item.Plot}
        </Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: darkMode ? '#333' : '#f5f5f5' }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StyledText style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>Watch Now</StyledText>
          <TouchableOpacity onPress={toggleSearchVisibility}>
            <FontAwesomeIcon icon={faSearch} size={28} style={[styles.searchIcon, { color: darkMode ? '#fff' : '#000' }]} />
          </TouchableOpacity>
        </View>
        {searchVisible && (
          <TextInput
            style={[styles.searchBox, { backgroundColor: darkMode ? '#555' : '#fff', color: darkMode ? '#fff' : '#000' }]}
            placeholder="Search Movies..."
            placeholderTextColor={darkMode ? '#ccc' : 'gray'}
            onChangeText={setSearch}
            onSubmitEditing={fetchMovies}
          />
        )}
        <TouchableOpacity onPress={toggleNumColumns} style={[styles.toggleColButton, { backgroundColor: darkMode ? '#555' : '#fff', color: darkMode ? '#fff' : '#000' }]}>
          <Text style={[styles.toggleColText, { backgroundColor: darkMode ? '#555' : '#fff', color: darkMode ? '#fff' : '#000' }]}>
            {numColumns === 1 ? 'List View' : 'Grid View'}
          </Text>
        </TouchableOpacity>
        {loading ? (
          <ActivityIndicator size="large" style={styles.activityIndicator} color={'blue'} />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <FlatList
            data={movies}
            renderItem={renderMovieItem}
            numColumns={numColumns}
            keyExtractor={(item) => item.imdbID}
            contentContainerStyle={styles.movieList}
            key={numColumns}
            columnWrapperStyle={numColumns > 1 && { justifyContent: 'space-between' }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  searchIcon: {
    top: 15,
    right: 25,
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 0,
    marginVertical: 10,
    fontFamily: 'Roboto',
  },
  toggleColButton: {
    backgroundColor: '#037aff',
    padding: 11,
    borderRadius: 20,
    marginVertical: 10,
    position: 'absolute',
    top: 10,
    right: 60,
    zIndex: 1000,
  },
  toggleColText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  movieList: {
    padding: 10,
  },
  card: {
    margin: 5,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 300,
    paddingBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',   
    backgroundColor: '#0E2F63',


  },
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center', 
    alignItems: 'center',

  },

  plot: {
    fontSize: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    lineHeight: 18,
    fontFamily: 'Open Sans',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Impact',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  activityIndicator: {
    marginTop: 250,
  },
});

export default MovieHomeScreen;