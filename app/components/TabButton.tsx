import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import { TabTrigger } from 'expo-router/ui';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { RelativePathString } from 'expo-router';
import { Colors } from '../constants/Colors';

export type TabButtonType = {
    name: string,
    tabText: string,
    href: RelativePathString,
    children: React.ReactNode,
    onPress: (name: string) => void,
    selectedTab: string
}

export function TabButton({ name, href, tabText, onPress, selectedTab, children} : TabButtonType) {

    return (
        <TabTrigger
        name={name}
        href={href}
        >
            <Pressable
            onPress={() => {onPress(name)}}
            >
                <View style={styles.innerContainer}>
                    {children}
                    <Text style={{color: selectedTab === name ? Colors.light.primary500: Colors.light.gray700, ...styles.tabText}}>{tabText}</Text>
                </View>
            </Pressable>
        </TabTrigger>
    )
}

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