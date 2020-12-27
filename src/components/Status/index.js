import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';


class Status extends Component {
  render(){

  return (
    <View>
        <View style={styles.container}>
          <View style={styles.leftSide} >
                        <TouchableOpacity>
                          <View style={styles.Notification}>

                            <View style={styles.Dp}>
                              <Image style={styles.img}
                                  source={{
                                    uri:'https://i.pinimg.com/originals/3b/44/fb/3b44fbeb46ce028bc90c6ca760b7d4a0.jpg'
                                  }}
                              />
                            </View>
                      
                                <View style={styles.nameView}>
                                  <Text style={styles.name}> Muhammad Fahad Zahid </Text>
                                  <Text style={styles.mesg}> Yesterday, 10:45 PM </Text>
                                </View>  
                          </View>
                        </TouchableOpacity>       
          </View>


                                  <View style={styles.rightSide}>
                                    <View style={styles.mesgTime}>
                                      <TouchableOpacity>
                                        <SimpleLineIcons name="options" size={20} color="#075E54" />
                                      </TouchableOpacity> 
                                    </View>
                                  </View>
        </View>
                                      <View
                                        style={{
                                          borderBottomColor: 'lightgray',
                                          borderBottomWidth: 1,
                                        }}
                                      />
    </View>
  );
}

}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },


  leftSide:{
    flex:4
  },

  Notification:{
    height:80,
    flexDirection:'row'
  },



  Dp:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:7
  },



  img:{
    height:60,
    width:60,
    borderRadius:100,
  },



  nameView:{
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:10,
    flex:3.5,
  },



  name:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5,
    width:"100%",
    height:'30%'
  },



  mesg:{
    color:'#757575',
    width:'100%',
    height:'25%'
  },


  rightSide:{
    flex:1
  },


  mesgTime:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },



  day:{
    color:'#00C853',
    fontSize:9,
    marginBottom:5,
    marginLeft:5
  },



  dateView:{
    justifyContent:'center',
    alignItems:'center'
  },



  showMesg:{
    width:'100%',
    height:'100%',
    backgroundColor:'#00C853',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },



  num:{
    color:'white',
    fontSize:12,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00C853',
    borderRadius:100,
  }
});

export default Status;