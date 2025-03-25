// HomeStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import MovieHomeScreen from '../screens/MovieScreen'; 
import MovieDetailScreen from '../screens/MovieDetailScreen'; 

// Import Redux and the necessary functions
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../redux/ThemeSlice';

const Stack = createStackNavigator();

const HomeStack = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: darkMode ? '#181818' : '#fff', // Adjust background color based on theme
                },
                headerTintColor: darkMode ? '#fff' : '#000', // Adjust text color
                headerTitleStyle: {
                    fontWeight: 'bold',
                    // Customize further if needed, or add fonts using style linking
                },
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={MovieHomeScreen} 
                options={{ headerShown: false }} // Customize display settings
            />
            <Stack.Screen 
                name="MovieDetails" 
                component={MovieDetailScreen} 
                options={{ title: '', headerBackTitle: false }} // Can add dynamic titles or more options as needed
            />
        </Stack.Navigator>
    );
};

export default HomeStack;