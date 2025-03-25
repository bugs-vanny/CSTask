// components/StyledText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const StyledText = ({ children, style, ...props }) => {
  const { colors } = useTheme();
  
  return (
    <Text style={[styles.text, { color: colors.text }, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: 'Bebas Neue',
},
});

export default StyledText;