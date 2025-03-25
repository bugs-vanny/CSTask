// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './context/ThemeContext';
import RootStack from './navigation/RootStack';

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </ThemeProvider>
    );
}