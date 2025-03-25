import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GenreBadge = ({ genre }) => (
  <View style={styles.genreBadge}>
    <Text style={styles.genreText}>{genre}</Text>
  </View>
);

const styles = StyleSheet.create({
  genreBadge: {
    backgroundColor: '#444',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  genreText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default GenreBadge;