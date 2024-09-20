import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

interface ITodo {
  id:number;
  name:string
}
export default function App() {
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState<ITodo[]>([])

    function randomId (min:number, max:number){
      return Math.floor(Math.random()*(max - min + 1)) + min
    }

    const handleAddTodo = () => {
      if(!todo) {
        Alert.alert("Lỗi input todo", "Todo không đượch để trống")
        return
      }
      setListTodo([...listTodo, 
      {id:randomId(1,100000), name: todo}]);
      setTodo("")
    }

    const deleteTodo = (id:number) => {
      const newTodos = listTodo.filter(item => item.id !== id)
      setListTodo(newTodos)
    }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>

    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{fontSize:30,textAlign:"center"}}>Todo App</Text>
    </View>

    <View>
      <TextInput 
        value={todo}
       style={styles.todoInput} 
       onChangeText={(value)=>setTodo(value)}
      />
      <Button 
        title='Add todo'
        onPress={handleAddTodo}
      />
   {/* List to do */}
    </View>
      <FlatList
        data={listTodo}
        renderItem={({item}) => {
          return (
            <Pressable
              style={({pressed}) => ({opacity:pressed?0.5:1})}
            >
              <View style={styles.todoItem}>
            <Text>{item.name}</Text>
            <Pressable
              onPress={() => deleteTodo(item.id)}
            >
            <Feather  name="trash" size={24} color="black" />
            </Pressable>
              </View>
            </Pressable>
          )
        }}
      />

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:10,
    marginVertical:40,
    flex:1
  },
  header: {
    backgroundColor:"aqua",
    padding:20,
    marginVertical:20
  },
  todoInput: {
    borderWidth:1,
    borderBlockColor:"green",
    padding:10,
    fontSize:20,
    marginBottom:10
  },
  todoItem : {
    backgroundColor:"aqua",
    padding:15, 
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
  }
});
