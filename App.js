
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localDb'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      word:"",
      displayWord:"",
      chunks:[]
    }
  }
  render(){
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <Header  backgroundColor={'#9c8210'}  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}/>
       <TextInput
       style={styles.inputBox}
       onChangeText={(text)=>{
this.setState({word:text})
       }}
       /><TouchableOpacity style={styles.goButton}
       onPress={()=>{
         this.setState({chunks:db[this.state.word].chunks})
       }}>
         <Text style={styles.buttonText}>GO</Text>
       </TouchableOpacity>
       {this.state.chunks.map((item)=>{
         return(
         <TouchableOpacity style={styles.chunkButton}>
 <Text style={styles.displayText}>{item}</Text>
 </TouchableOpacity>
         )
 console.log(item)
       })}
      
      </View>
      </SafeAreaProvider>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
   // outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  chunkButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'red'
  },
});
