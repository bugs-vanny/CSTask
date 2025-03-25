

import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const AccountScreen = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
      <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <View style={styles.switchContainer}>
        <Text style={styles.sectionTitle}>Theme Switch</Text>
        <View style={[styles.switchRow, , { backgroundColor: darkMode ? '#fff' : '#333' }]}>
          <Text style={[styles.switchLabel, {color: darkMode ? '#333' : '#fff' }]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={darkMode}
          />
        </View>
      </View>
      
    </View>
    );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    sectionTitle: {
      fontSize: 18,
      color: '#00aaff',
      marginBottom: 10,
    },
    switchContainer: {
      marginBottom: 20,
    },
    switchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 10,
    },
    switchLabel: {
      fontSize: 16,
    },
    settingsContainer: {
      marginBottom: 20,
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    optionLabel: {
      fontSize: 16,
      flex: 1,
      marginLeft: 10,
    },
  });

export default AccountScreen;
