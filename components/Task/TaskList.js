import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const TaskList = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={props.tasklist}
          keyExtractor={(item) => item.key}  // Ensure you have a keyExtractor for FlatList
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => props.toggleTaskCompletion(item.key)}>
                <FontAwesomeIcon
                  icon={item.completed ? faSquareCheck : faSquare}
                  size={15}
                  color="black"
                />
              </TouchableOpacity>
              <Text style={[styles.taskText, item.completed && styles.completed]}>
                {item.text}
              </Text>

              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => props.startEditTask(item)}
              >
                <FontAwesomeIcon icon={faPen} size={15} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => props.deleteTask(item.key)}
              >
                <FontAwesomeIcon icon={faTrash} size={15} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 1,
  },
  taskText: {
    flex: 1,
    marginLeft: 30,
    fontSize: 15,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default TaskList;