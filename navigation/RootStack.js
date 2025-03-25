// RootStack.js

import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MovieScreen from '../screens/MovieScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TaskScreen from '../screens/TaskScreen';
import { ThemeContext } from '../context/ThemeContext';
import HomeStack from './HomeStack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faH, faHome, faTasks, faTelevision } from '@fortawesome/free-solid-svg-icons';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  const { darkMode } = useContext(ThemeContext);
  
  // Determine styles based on the dark mode setting
  const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: darkMode ? '#181818' : '#f8f8f8',
    },
    headerTintColor: {
      color: darkMode ? '#fff' : '#000',
    },
    tabBarStyle: {
      backgroundColor: darkMode ? '#181818' : '#fff',
    },
    tabBarActiveTintColor: {
      color: darkMode ? '#fff' : '#000',
    },
    tabBarInactiveTintColor: {
      color: darkMode ? '#888' : '#aaa',
    },
    iconSize: 24 // Define a size for icons
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: styles.headerTintColor.color,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
      }}
    >
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faTasks} color={color} size={styles.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name=" Movie"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faTelevision} color={color} size={styles.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCog} color={color} size={styles.iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;