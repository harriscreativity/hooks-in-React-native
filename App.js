import React,{ useState } from 'react';
import 
{
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
}
from 'react-native';


const App = () => {

  const [TodoItems,SetTodoItems] = useState([]);
  const [InputValue,SetInputValue] = useState('');

  const HandleTextInput = value =>{
    SetInputValue(value)
  }

  const AddTodo = () =>{
    if(InputValue.length > 2){
      var Items = TodoItems;
      Items.push(InputValue);
      SetTodoItems(Items);
      SetInputValue('')
    }else{
      alert('Please insert your Todo ....')
    }
  }

  return(
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <TextInput style={styles.Input}
          onChangeText={HandleTextInput} 
          placeholder="Todo" 
          value={InputValue} />
        <TouchableOpacity onPress={AddTodo}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </View>
        </TouchableOpacity>
        <FlatList style={{ marginTop:10 }}
          data={TodoItems}
          renderItem={({item,index})=>
            <View key={index} style={styles.TodoItem}>
              <Text>{item}</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer:{
    flexDirection:'column',
    padding:10,
  },
  Input:{
    padding:10,
    height:40,
    borderColor:'#000',
    borderWidth:2
  },
  button:{
    backgroundColor:'#000',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  buttonText:{
    color:'white',
    fontSize:18,
    letterSpacing:2
  },
  TodoItem:{
    borderWidth:2,
    borderColor:'#000',
    height:40,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App;