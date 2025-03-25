import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { faBell, faEye, faUser } from '@fortawesome/free-regular-svg-icons';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      
      {/* // Account Button */}

      <TouchableOpacity
        style={[styles.item, { backgroundColor: darkMode ? '#444' : '#fff' }]}
        onPress={() => navigation.navigate('Account')}
      >
        <FontAwesomeIcon icon={faUser} size={25} style={[styles.icon, { color: darkMode ? '#fff' : '#000' }]} />
        <Text style={[styles.itemText, { color: darkMode ? '#fff' : '#000' }]}>Account</Text>
        <FontAwesomeIcon icon={faAngleRight} size={19} style={[styles.arrowIcon, { color: darkMode ? '#fff' : '#000' }]} />
      </TouchableOpacity>

      {/* //  Notifications Button  */}

      <TouchableOpacity
        style={[styles.item, { backgroundColor: darkMode ? '#444' : '#fff' }]}
        onPress={() => navigation.navigate('Notifications')}
      >
        <FontAwesomeIcon icon={faBell} size={25} style={[styles.icon, { color: darkMode ? '#fff' : '#000' }]} />
        <Text style={[styles.itemText, { color: darkMode ? '#fff' : '#000' }]}>Notifications</Text>
        <FontAwesomeIcon icon={faAngleRight} size={19} style={[styles.arrowIcon, { color: darkMode ? '#fff' : '#000' }]} />
      </TouchableOpacity>

      {/* // Appearance Button */}

      <TouchableOpacity
        style={[styles.item, { backgroundColor: darkMode ? '#444' : '#fff' }]}
        onPress={toggleTheme}
      >
        <FontAwesomeIcon icon={faEye} size={25} style={[styles.icon, { color: darkMode ? '#fff' : '#000' }]} />
        <Text style={[styles.itemText, { color: darkMode ? '#fff' : '#000' }]}>Appearance</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#444" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={darkMode}
        />
      </TouchableOpacity>

      {/* // Privacy Button */}

      <TouchableOpacity
        style={[styles.item, { backgroundColor: darkMode ? '#444' : '#fff' }]}
        onPress={() => navigation.navigate('Privacy')}
      >
        <FontAwesomeIcon icon={faLock} size={25} style={[styles.icon, { color: darkMode ? '#fff' : '#000' }]} />
        <Text style={[styles.itemText, { color: darkMode ? '#fff' : '#000' }]}>Privacy</Text>
        <FontAwesomeIcon icon={faAngleRight} size={19} style={[styles.arrowIcon, { color: darkMode ? '#fff' : '#000' }]} />
      </TouchableOpacity>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 20,
    marginVertical: 0,
    borderColor: 'black',
    borderWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 23,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    marginLeft: 10,
  },
  icon: {
    color: 'black',
  },
  arrowIcon: {
    color: 'black',
  },
});

export default SettingsScreen;
