// import { Tabs } from "expo-router";
import { Tabs, TabSlot, TabList, TabTrigger } from "expo-router/ui";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text, StyleSheet } from "react-native";
import {TabButton, TabButtonType} from "../components/TabButton";
import { RelativePathString } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { Colors } from "../constants/Colors";


export default function TabLayout() {
    const insets = useSafeAreaInsets();

    const [selectedTab, setSelectedTab] = useState('home');

    const onPressHandler = (name: string): void => {
        setSelectedTab(name);
    }

    const tabsSchema: TabButtonType[] = [
        {
            name: 'home',
            href : '/' as RelativePathString,
            children: <MaterialIcons size={28} name="home" color={selectedTab === 'home' ? Colors.light.primary500 : Colors.light.gray700}></MaterialIcons>,
            tabText: 'Home',
            onPress: onPressHandler,
            selectedTab: selectedTab
        },
        {
            name: 'progress',
            href: '/(tabs)/progress' as RelativePathString,
            children: <MaterialIcons size={28} name="bar-chart" color={selectedTab === 'progress' ? Colors.light.primary500 : Colors.light.gray700}/>,
            tabText: 'Progress',
            onPress: onPressHandler,
            selectedTab: selectedTab
        },
        {
            name: 'goals',
            href: '/(tabs)/goals' as RelativePathString,
            children: <MaterialIcons size={28} name="checklist" color={selectedTab === 'goals' ? Colors.light.primary500 : Colors.light.gray700}/>,
            tabText: 'Goals',
            onPress: onPressHandler,
            selectedTab: selectedTab
        }
    ]

    return (
        <Tabs >
            <TabSlot></TabSlot>
                <View style={{paddingBottom: insets.bottom}}>
                    <View style={styles.tabButtonsOuter}>
                    {tabsSchema && tabsSchema.map(tab => (
                        <TabButton 
                        key={tab.name} 
                        name={tab.name} 
                        href={tab.href as RelativePathString} 
                        tabText={tab.tabText}
                        onPress={tab.onPress}
                        selectedTab={selectedTab}>
                            {tab.children}
                        </TabButton>
                    ))}
                    </View>
                </View>
            <TabList style={{display: 'none'}}>
                <TabTrigger name="home" href="/">
                    <Text>Home</Text>
                </TabTrigger>
                <TabTrigger name="progress" href="/(tabs)/progress">
                    <Text>Progress</Text>
                </TabTrigger>
            </TabList>
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabButtonsOuter: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        borderRadius: 12, 
        paddingHorizontal: 20, 
        paddingVertical: 20,
        marginBottom: 0, marginHorizontal: 20, 
        backgroundColor: 'white'
    },
})