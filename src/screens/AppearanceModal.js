import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Switch, Button } from 'react-native'; // Added Button here
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const AppearanceModal = ({ modalVisible, setModalVisible, darkMode, toggleTheme }) => {


    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={[styles.modalView, { backgroundColor: darkMode ? '#444' : '#fff' }]}>
                    {/* Add the Button to toggle the modal visibility */}
                    <Pressable
                        style={[styles.button, styles.buttonClose, { backgroundColor: darkMode ? 'transparent' : 'transparent' }]}
                        onPress={() => setModalVisible(false)}
                    >
                    </Pressable>
                    <Text style={styles.lineStyle}></Text>

                    <FontAwesomeIcon 
                        icon={darkMode ? faMoon : faSun}
                        size={100}
                        color={darkMode ? '#ffffff' : '#000000'}
                        style={styles.iconStyle}
                    />
                    
                    <Text style={[styles.modalText, { color: darkMode ? '#fff' : '#000' }]}>Theme Toggle</Text>
                    
                    <View style={styles.switchRow}>
                        <Text style={[styles.switchLabel, { color: darkMode ? '#fff' : '#000' }]}>Light Mode / Dark Mode</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={darkMode ? "#444" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={darkMode}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20, 
        paddingBlockEnd: 20,
    },
    modalView: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        position: 'absolute',
        top: 20,
        width: 90,
        height: 4,
        padding: 20,
    },
    buttonClose: {
        backgroundColor: 'transparent',
    },
    lineStyle: {
      borderRadius: 20,
      position: 'absolute',
      top: 20,
      width: 90,
      height: 4,
      backgroundColor: 'black',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
    },
    switchLabel: {
        fontSize: 16,
        marginRight: 10,
    },
    iconStyle: {
        margin: 70,
        shadowOpacity: 0.90,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 0 },
    },
});

export default AppearanceModal;
