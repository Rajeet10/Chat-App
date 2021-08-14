import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet,KeyboardAvoidingView } from 'react-native';
import {Button,Input,Image} from 'react-native-elements';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SignIn=()=>{

    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Image 
            source={{
               uri:
               "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
            }}
            style={{width:150 , height:150, borderRadius:10}}
            />
            <View style={styles.inputContainer}>
            <Input
             placeholder="Email"
              autoFocus
               type="Email"
               onChangeText={(text)=>setEmail(text)}
               />
            <Input 
            placeholder="password" 
            secureTextEntry
             type="password"
             onChangeText={(text)=>setPassword(text)}
             />
            </View>
            <Button 
            containerStyle={styles.button} 
            title="Login"
            onPress={SignIn}
            />
            <Button 
            containerStyle={styles.button} 
            title="Register"
            type="outline"
            />
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    backgroundColor:'white'
},    
inputContainer:{
width:300,

},
button:{
width:200,
marginTop:10,

}
});
