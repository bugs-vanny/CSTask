// screens/MainSettingsScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const MainSettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Appearance Settings"
        onPress={() => navigation.navigate('Appearance')}
      />
    </View>
  );
};

export default MainSettingsScreen;