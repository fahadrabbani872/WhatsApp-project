import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class Call extends Component {
  render(){

  return (
         <View style={styles.container}>
           <Text> Call.js </Text>
           <Button title="Go Back" onPress={() => {this.props.navigation.goBack()}}/>
         </View>
  );
}

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default Call;