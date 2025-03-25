import React from 'react';
import { View, StyleSheet } from 'react-native';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <View style={styles.starContainer}>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} size={20} color="#FFD700" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <FontAwesomeIcon key={`half-${index}`} icon={faStarHalf} size={20} color="#FFD700" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStar} size={20} color="#FFD700" style={{ opacity: 0.3 }} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default StarRating;