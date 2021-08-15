import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements'

const CustomListItem = ({ id,chatName,enterChat }) => {
    return (
        <ListItem>
            <Avatar
            rounded
            source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            }}
            />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight:"800" }}>
                rajeet
            </ListItem.Title>
            <ListItem.Subtitle 
            numberOfLines={1} 
            ellipsizeMode="tail"
            >
                This is a test message
            </ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem;

const styles=StyleSheet.create({

});
