// src/redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    darkMode: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
    },
});

export const { setDarkMode } = themeSlice.actions;

// A thunk for toggling dark mode and persisting it
export const toggleTheme = () => async (dispatch, getState) => {
    const currentMode = getState().theme.darkMode;
    const newMode = !currentMode;
    dispatch(setDarkMode(newMode));
    await AsyncStorage.setItem('darkMode', JSON.stringify(newMode));
};

// A thunk for loading the theme from AsyncStorage
export const loadTheme = () => async (dispatch) => {
    const storedTheme = await AsyncStorage.getItem('darkMode');
    if (storedTheme !== null) {
        dispatch(setDarkMode(JSON.parse(storedTheme)));
    }
};

export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;