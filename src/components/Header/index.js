import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,SafeAreaView,StatusBar, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


class Header extends Component{
  render(){
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
        <View style={styles.Header}>
            <View style={styles.textview}> 
                <Text style={styles.text}>WhatsApp</Text>
            </View>

                <View style={styles.icon}>
                    <TouchableOpacity>
                        <FontAwesome name="search" size={18} color="#fff" />
                    </TouchableOpacity>

                        <TouchableOpacity>
                            <SimpleLineIcons name="options-vertical" size={18} color="#fff" />
                        </TouchableOpacity>
                </View>
        </View>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
    Header: {
      backgroundColor:"#075E54",
      height:55,
      flexDirection:"row",
      alignItems:"center"
    },
    textview:{
        flex:3.5
    },
    text:{
        fontSize:22,
        fontWeight:"bold",
        marginLeft:20,
        color:"white",
        },

    icon:{
        justifyContent:"space-around",
        flexDirection:"row",
        flex:1
    }
  });


export default Header;