import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Chats from './src/components/Chats';
import Status from './src/components/Status';
import Call from './src/components/Call';
import  Header  from "./src/components/Header";
import Mesg from './src/components/Chats/Mesg'




var obj1 ={
  Chats:{
    screen:Chats,
  },
  Status:{
    screen:Status,
  },
  Call:{
    screen:Call,
    }
}
var obj2 ={
  tabBarOptions:{
    labelStyle: {
      fontSize: 15,
    fontWeight:'bold'

      
    },
    style:{
      height:60,
      justifyContent: 'flex-end',
      backgroundColor:'#075E54'
    },
    iconStyle:{
    }
  }

  }

const AppNavigator = createMaterialTopTabNavigator (obj1,obj2)

const AppStack = createStackNavigator(
  {
    Home:{
    screen:AppNavigator,
      navigationOptions: {
        header: () => <Header />
      }
    },
    Mesg:{
      screen:Mesg,
      navigationOptions: {
          headerShown: false,
          }
    },
  });
export default createAppContainer (AppStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

