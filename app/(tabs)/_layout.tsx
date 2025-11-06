// import { Tabs } from "expo-router";
import { Tabs, TabSlot, TabList, TabTrigger } from "expo-router/ui";
import { View, Text, StyleSheet } from "react-native";
import CustomTabButton, {TabButtonProps} from "../components/CustomTabButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
    const insets = useSafeAreaInsets();

    const tabsSchema: TabButtonProps[] = [
        {
            name: 'home',
            iconName: 'home',
            tabText: 'Home',
        },
        {
            name: 'progress',
            iconName: 'bar-chart',
            tabText: 'Progress',
        },
        {
            name: 'goals',
            iconName: 'checklist',
            tabText: 'Goals',
        }
    ]

    return (
        <Tabs>
            <TabSlot/>
                <View style={{paddingBottom: insets.bottom}}>
                    <View style={styles.tabButtonsOuter}>
                    {tabsSchema && tabsSchema.map(tab => (
                        <TabTrigger 
                        key={tab.name}
                        name={tab.name}
                        href={`/(tabs)/${tab.name}` as any}
                        asChild>
                        <CustomTabButton 
                            name={tab.name}
                            tabText={tab.tabText}
                            iconName={tab.iconName}
                        />
                        </TabTrigger>
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
                <TabTrigger name="goals" href="/(tabs)/goals">
                    <Text>Goals</Text>
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
        paddingVertical: 15,
        marginBottom: 15, marginHorizontal: 20, 
        backgroundColor: 'white'
    },
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