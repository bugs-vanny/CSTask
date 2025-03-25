// screens/PrivacyScreen.js

import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from '../components/StyledText';
import { ThemeContext } from '../context/ThemeContext'; // Ensure the path is correct based on your structure

const NotificationsScreen = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#f5f5f5' }]}>
      <StyledText style={[styles.text, { color: darkMode ? '#fff' : '#000', fontSize: 20 }]}>
        Notifications Page
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default NotificationsScreen;