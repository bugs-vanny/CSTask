// RootStack.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

// Import Theme Redux
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../redux/ThemeSlice';

// Import screens
import TaskScreen from '../screens/TaskScreen';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faTasks, faTelevision } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  // Use useSelector to access darkMode state from Redux store
  const darkMode = useSelector(selectDarkMode);

  // Determine styles based on the dark mode setting
  const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: darkMode ? '#181818' : '#f8f8f8',
    },
    headerTintColor: darkMode ? '#fff' : '#000',
    tabBarStyle: {
      backgroundColor: darkMode ? '#181818' : '#fff',
    },
    tabBarActiveTintColor: darkMode ? '#fff' : '#000',
    tabBarInactiveTintColor: darkMode ? '#888' : '#aaa',
    iconSize: 24 // Define a size for icons
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: styles.headerTintColor,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: styles.tabBarActiveTintColor,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor,
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
        name="Movie"
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