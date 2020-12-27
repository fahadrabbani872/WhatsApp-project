import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image,TouchableOpacity} from 'react-native';




class Chats extends Component {

  constructor () {
    super()
    this.state={
      chat :[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
  }

    render(){

      return (
        <View>
              <ScrollView>
                  {this.state.chat.map((val,ind)=>{
                    return (
                      <View key={val,ind}>
                        <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Mesg')}}>
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
                                  <Text style={styles.mesg}> Hello WhatsApp </Text>
                                </View>

                                    <View style={styles.mesgTime}>
                                      <Text style={styles.day}> YESTERDAY </Text>
                                        <View style={styles.dateView}>
                                            <Text style={styles.num}> 1 </Text>
                                        </View>
                                    </View>
                          </View>
                        </TouchableOpacity>
                                      <View
                                        style={{
                                          borderBottomColor: 'lightgray',
                                          borderBottomWidth: 1,
                                          width:'75%',
                                          marginLeft:80
                                        }}
                                      />
                        
                      </View>
                    );
                  })}
              </ScrollView>
        </View>
        
  );
 }
}



const styles = StyleSheet.create({
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



  mesgTime:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
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

export default Chats;










