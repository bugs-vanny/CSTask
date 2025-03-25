// App.js

import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { loadTheme } from './src/redux/ThemeSlice';
import store from './src/redux/Store';
import RootStack from './src/navigation/RootStack';

const App = () => {
    useEffect(() => {
        // Load the theme from AsyncStorage when app starts
        store.dispatch(loadTheme());
    }, []);
    
    return (
        <Provider store={store}>r
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </Provider>
    );
};

export default App;