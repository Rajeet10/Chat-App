import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const style=StyleSheet.create({

});
