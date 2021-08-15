import React, { useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity,SafeAreaView,KeyboardAvoidingView,Platform,StyleSheet,ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements'
import {AntDesign,FontAwesome,Ionicons} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'


const ChatScreen = ({ navigation,route }) => {
    useLayoutEffect(()=>{
      navigation.setOptions({
      title:"Chat",
      headerBackTitleVisible:false,
      headerTitleAlign:"left",
      headerTitle:()=>(
          <View
          style={{
              flexDirection:'row',
              alignItems:'center'
          }}
          >
              <Avatar
              rounded
              source={{
                  uri:
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }}
              />
              <Text style={{color:'white',marginLeft:10,fontWeight:"700"}}>
                  {route.params.chatName}
              </Text>
          </View>
      ),
      headerLeft:()=>(
          <TouchableOpacity
          style={{marginLeft:10}}
          onPress={navigation.goBack}
          >
           <AntDesign name="arrowleft" size={24} color="white"/>
          </TouchableOpacity>
      ),
      headerRight:()=>(
          <View
          style={{
              flexDirection:'row',
              justifyContent:'space-between',
              width:80,
              marginRight:20
          }}
          >
              <TouchableOpacity>
                  <FontAwesome 
                  name="video-camera"
                  size={24}
                  color="white"
                  />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Ionicons name="call" size={24} color="white" />
              </TouchableOpacity>
          </View>
      )
      });
    },[navigation])
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <StatusBar style="light"/>
            <KeyboardAvoidingView
            behavior={Platform.OS==="ios" ? "padding" :"height"}
            style={styles.container}
            keyboardVerticalOffset={90}
            >
             <>
             <ScrollView>
                 {/* chat goes here */}
             </ScrollView>
             <View style={styles.footer}>

             </View>
             </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen;

const styles=StyleSheet.create({
container:{},
footer:{}
})
