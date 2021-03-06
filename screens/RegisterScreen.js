import React,{useLayoutEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet,KeyboardAvoidingView } from 'react-native';
import {Button,Input,Text} from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle:"Back to Login",
        })
    },[navigation])
    
    const register=()=>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl || 
                "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",

            });
        })
        .catch((error)=>alert(error.message));
    };

    return (
        <KeyboardAvoidingView 
        behavior="padding" 
        style={styles.container}
        >
            <StatusBar style="light"/>

            <Text h3 style={{marginBottom:50}}>
                Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
            <Input
            placeholder="Full Name"
            autoFocus
            type="text"
            value={name}
            onChangeText={(text)=>setName(text)}
            />
            <Input
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={(text)=>setEmail(text)}
            />
            <Input
            placeholder="Password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={(text)=>setPassword(text)}
            />
            <Input
            placeholder="Profile Picture Url (Optional)"
            type="text"
            value={imageUrl}
            onChangeText={(text)=>setImageUrl(text)}
            onSubmitEditing={register}
            />
            </View>
            <Button
            containerStyle={styles.button}
            raised
            title="Register"
            onPress={register}
            />
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    backgroundColor:'white'
},
inputContainer:{
    width:300
},
button:{
    width:200,
    marginTop:10
}
});
