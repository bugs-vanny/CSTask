import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importing Screens
import SettingsScreen from '../screens/SettingsScreen';
import TaskScreen from '../screens/TaskScreen'; 
import NotificationsScreen from '../screens/NotificationsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import AccountScreen from '../screens/AccountScreen';

// Importing Theme
import { selectDarkMode } from '../redux/ThemeSlice';
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();

const SettingsStack = () => {
  // Accessing the Theme Context
  const darkMode = useSelector(selectDarkMode);

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {
          backgroundColor: darkMode ? '#181818' : '#fff', // Adjust background color based on theme
        },
        headerTintColor: darkMode ? '#fff' : '#000', // Adjust text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{headerBackTitle: false, headerTitle: ''}} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} options={{headerBackTitle: false, headerTitle: ''}}/>
      <Stack.Screen name="Account" component={AccountScreen} options={{headerBackTitle: false, headerTitle: ''}}/>
    </Stack.Navigator>
  );
};

export default SettingsStack;