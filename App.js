import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();
const globalScreenOptions={

};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={globalScreenOptions}>
      <Stack.Screen 
      name="Login"
      component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
