// navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/MovieScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ProfileScreen from '../../screens/TaskScreen'; 

const Tab = createBottomTabNavigator();

const MainTabs = ({ toggleTheme }) => (
  <Tab.Navigator>
    <Tab.Screen name="Home">
      {() => <HomeScreen toggleTheme={toggleTheme} />}
    </Tab.Screen>
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainTabs;