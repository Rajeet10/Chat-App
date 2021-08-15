import React from 'react'
import { View, Text } from 'react-native'

const ChatScreen = ({ navigation,route }) => {
    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatScreen
