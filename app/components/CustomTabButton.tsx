import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import { TabTriggerSlotProps } from 'expo-router/ui';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '../constants/Colors';
import React, { useEffect } from 'react';


export type TabButtonProps = TabTriggerSlotProps & {
    name: string,
    tabText: string,
    iconName: any
}

export const CustomTabButton = ({ name, tabText, isFocused, iconName, ...props} : TabButtonProps)  =>{

    useEffect(() => {
    }, [])
    return (
            <Pressable
            {...props}
            >
                <View style={styles.innerContainer}>
                    <MaterialIcons 
                        size={28}
                        name={iconName}
                        color={isFocused ?  Colors.light.primary500 : Colors.light.gray700}
                    />
                    <Text style={{color: isFocused ? Colors.light.primary500: Colors.light.gray700, ...styles.tabText}}>{tabText}</Text>
                </View>
            </Pressable>
    )
}

export default CustomTabButton;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: 'white',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    tabText: {
        fontSize: 12
    }
})