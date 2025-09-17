import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../constants/Colors";
import React from "react";

type ButtonType = {
    children: React.ReactNode,
    onPress?: () => void
}

const Button = ({children, onPress}: ButtonType) => {

    return (
        <Pressable 
            style={({pressed}) => [
              styles.btn,
              {
                transform: pressed ? 'scale(.9)' : 'scale(1)'
              },
              styles.round
            ]}
            onPress={onPress}
            >
            {children}
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    round: {
        borderRadius: 12
    }
})