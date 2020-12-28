import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Button, FlatList } from 'react-native';

import Note from './Note';

export default () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos(todos => [...todos, {title: input, id: newId} ]);
    setInput('')
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    setInput('')
  }

  const renderItem = ({item}) => {
    return (
      <Note title={item.title} id={item.id} onDelete={handleDeleteTodo}/>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          To Do
        </Text>
      </View>

      <View style={styles.scrollContainer}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => {
            console.log(`${item.id}`)
            return `${item.id}`
          }}
        />
      </View>
      <View style={styles.footer}>
        <Button title={'ADD'} onPress={handleAddTodo}/>

        <TextInput style={styles.textInput} value={input}  onChangeText={(text) => setInput(text)}  />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

