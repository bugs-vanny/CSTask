import React, { useState, useMemo, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faSave } from '@fortawesome/free-solid-svg-icons';
import TaskList from '../components/Task/TaskList';
import { ThemeContext } from '../context/ThemeContext';

const TaskScreen = () => {
  const [task, setTask] = useState('');
  const [tasklist, setTasklist] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState('');
  const { darkMode } = useContext(ThemeContext);

  // Handle Add Task
  const addTask = () => {
    if (task.trim()) {
      setTasklist([...tasklist, { key: Date.now().toString(), text: task, completed: false }]);
      setTask('');
      setError('');
    } else {
      setError('Task cannot be empty');
    }
  };

  // Handle Delete Task
  const deleteTask = (taskKey) => {
    if (editingTask && editingTask.key === taskKey) {
      setEditingTask(null);
    }
    setTasklist(tasklist.filter(item => item.key !== taskKey));
  };

  // Handle Toggle Task Completion
  const toggleTaskCompletion = (taskKey) => {
    setTasklist(
      tasklist.map(item =>
        item.key === taskKey ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Handle Edit Task
  const startEditTask = (task) => {
    setEditingTask(task);
    setTask(task.text);
  };

  // Handle Save Edited Task
  const saveEditTask = () => {
    if (task.trim()) {
      setTasklist(
        tasklist.map(item =>
          item.key === editingTask.key ? { ...item, text: task } : item
        )
      );
      setEditingTask(null);
      setTask('');
    } else {
      setError('Task cannot be empty');
    }
  };

  // Count the number of completed tasks
  const completedTasksCount = useMemo(
    () => tasklist.filter(task => task.completed).length,
    [tasklist]
  );

  return (
    <View style={[styles.wrapper, { backgroundColor: darkMode ? '#333' : '#f5f5f5' }]}>
      <View style={[styles.halfScreenBackground, { backgroundColor: darkMode ? '#000' : '#037aff' }]} />
      <View style={styles.container}>
        <Text style={[styles.header, { color: darkMode ? '#fff' : 'white' }]}>Hello User</Text>
        <Text style={[styles.subHeader, { color: darkMode ? '#fff' : 'white' }]}>What are you going to do?</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { backgroundColor: darkMode ? 'white' : '#fff' }]}
            placeholder="Add To-Do"
            placeholderTextColor={darkMode ? '#ccc' : 'white'}
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity onPress={editingTask ? saveEditTask : addTask} style={styles.addButton}>
            <FontAwesomeIcon icon={editingTask ? faSave : faAdd} size={20} color="black" />
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <Text style={[styles.todoHeader, { color: darkMode ? '#fff' : 'white' }]}>Your To-Do List:</Text>

        <TaskList 
          tasklist={tasklist}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          startEditTask={startEditTask}  // Pass the function to start editing
        />

        <Text style={[styles.completedTasksText, { color: darkMode ? '#fff' : 'grey' }]}>
          Completed Tasks: {completedTasksCount}
        </Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  halfScreenBackground: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    borderBottomEndRadius: '20%',
    borderBottomStartRadius: '20%',
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  todoHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 0,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  addButton: {
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    borderRadius: 0,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  completedTasksText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10
  },
  themeSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default TaskScreen;