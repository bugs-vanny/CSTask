// ThemeContext.js

import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            const storedTheme = await AsyncStorage.getItem('darkMode');
            if (storedTheme !== null) {
                setDarkMode(JSON.parse(storedTheme));
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = !darkMode;
        setDarkMode(newTheme);
        await AsyncStorage.setItem('darkMode', JSON.stringify(newTheme));
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};