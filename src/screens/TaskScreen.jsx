import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import Loader from '../components/Loader';

const TaskScreen = ({route}) => {
  const {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
    newTaskTitle,
    setNewTaskTitle,
  } = useContext(TaskContext);

  const userId = route.params;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.view}>
                <Text style={styles.text}>
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + '...'
                    : item.title}
                </Text>
                <Button
                  title="REMOVE"
                  color="purple"
                  onPress={() => removeTask(item.id)}></Button>
              </View>
            )}
          />
          <View style={styles.inputContainer}>
            <TextInput
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              style={styles.input}
            />
            <Button
              onPress={() => {
                addTask(newTaskTitle || 'Yeni Task');
              }}
              title="Add Task"
              color={'purple'}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#EDE8DC',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
  },
  inputContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderRadius: 15,
    shadowColor: '#black',
  },
  input: {
    borderWidth: 1,
    width: '75%',
    padding: 8,
    fontSize: 16,
    borderRadius: 10,
    borderColor: '#643219',
  },
});
