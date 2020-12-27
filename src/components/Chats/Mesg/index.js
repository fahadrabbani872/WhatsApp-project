import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image,TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, InputAccessoryView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



class Mesg extends Component {

    constructor (){
        super()
        this.state={
            value:[1,2,3,4,5,2,2,2,22,2,2,2,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            text:[1,2,3,4,5,2,2,2,22,2,2,2,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
         }
        }

    render(){

        return (
            <View>

                <View style={styles.HeaderView}>
                    <View style={styles.LeftSide}>

                        <TouchableOpacity>
                            <AntDesign name="arrowleft" size={24} color="#fff" onPress={() => {this.props.navigation.navigate('Chats')}} />
                        </TouchableOpacity>
                        
                            <Image style={{height:40,width:40,borderRadius:100,marginHorizontal:5}}
                                source={{uri:'https://cdn.hipwallpaper.com/i/3/80/B5RlpT.png'}}
                            />
                            
                                <Text style={{fontSize:18,fontWeight:'bold', color:'#fff'}}>
                                    Fahad Rabbani
                                </Text>
                    </View>
                    
                            <View style={styles.RightSide}>

                                <TouchableOpacity>
                                    <MaterialIcons name="videocam" size={25} color="#fff" />
                                </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Ionicons name="call" size={20} color="#fff" />
                                    </TouchableOpacity>

                                        <TouchableOpacity>
                                            <SimpleLineIcons name="options-vertical" size={20} color="#fff" />
                                        </TouchableOpacity>

                            </View>
                </View>


                    <View style={styles.MesgMain}>
                        
                        <ImageBackground
                            source={{uri:'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'}}
                            style={{ flex:1 }}
                        >

                                <ScrollView> 

                                    <View>

                                        {this.state.value.map((ind,val)=>{
                                        return(
                                                <View key={ind,val} style={styles.recive}>
                                                    <Text style={{fontSize:17,fontStyle:'italic',fontWeight:'bold'}}>Hello WhatsApp</Text>
                                                </View>
                                            )
                                        })}

                                    </View>

                                            <View style={styles.sendView}>

                                                {this.state.text.map((ind,val)=>{
                                                return (
                                                        <View key={ind,val} style={styles.sendMesg}>
                                                            <Text style={{fontSize:17,fontStyle:'italic',fontWeight:'bold'}}>Hello WhatsApp</Text>
                                                        </View>
                                                    )
                                                })}

                                            </View>

                                </ScrollView>



                                            <View style={styles.footerView}>
                                                <View style={styles.footer}>

                                                    <TouchableOpacity>
                                                        <Entypo name="emoji-flirt" size={24} color="gray"  style={{marginLeft:10}}/>
                                                    </TouchableOpacity>
                                                    
                                                        <TextInput 
                                                            placeholder={'enter spome thing'}
                                                            style={{marginLeft:10 , width:170}}
                                                            >
                                                        </TextInput>

                                                            <TouchableOpacity>
                                                                <Entypo name="attachment" size={20} color="gray" />
                                                            </TouchableOpacity>

                                                                <TouchableOpacity>
                                                                    <FontAwesome name="camera" size={20} color="gray" style={{marginLeft:20}} />
                                                                </TouchableOpacity>
                                                
                                                </View>

                                                        <View style={styles.voiceView}>
                                                            <TouchableOpacity>
                                                                <MaterialIcons style={styles.mic} name="keyboard-voice" size={25} color="white" />
                                                            </TouchableOpacity>
                                                        </View>
                                            </View>
                        </ImageBackground>
                    </View>


            </View>
  );
 }
}

const styles = StyleSheet.create({
    HeaderView:{
        height:55,
        backgroundColor:'#075E54',
        flexDirection:'row',
        alignItems:'center'
    },

    LeftSide:{
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5
    },
    RightSide:{
        flex:1.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },

    MesgMain:{
        flexDirection:'column',
        height:'90.3%',
        width:'100%'
    },

    recive:{
        backgroundColor:'#fff',
        width:"70%",
        marginVertical:5,
        marginHorizontal:10,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
       },
    
    sendView:{
        flex:1,
        alignItems:'flex-end'
    },

    sendMesg:{
        backgroundColor:'#fff',
        width:"70%",
        marginVertical:5,
        marginHorizontal:10,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
    },

    footerView:{
        flexDirection:'row',
        alignItems:'center',
    },

    footer:{
        backgroundColor:'white',
        marginHorizontal:5,
        marginVertical:2,
        borderRadius:100,
        flex:5,
        flexDirection:'row',
        alignItems:'center',
        height:50
       },

    voiceView:{
        backgroundColor:'#075E54',
        borderRadius:100,
        marginHorizontal:5,
        marginVertical:2,
        alignItems:'center',
        flexDirection:'column',
        height:50,
        width:50
       },

    mic:{
        marginVertical:12
    }
});


export default Mesg;