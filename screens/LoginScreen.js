import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import {Button,Input,Image} from 'react-native-elements';

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light" />
            <Image 
            source={{
               uri:
               "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
            }}
            style={{width:200 , height:200}}
            />
        </View>
    )
}

export default LoginScreen;

const styles=StyleSheet.create({

});
