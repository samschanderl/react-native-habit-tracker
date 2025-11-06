import { useCallback, useState } from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from 'react-native-sortables';

const initial = [
    {id: "1", text: "text1"},
    {id: "2", text: "text2"},
    {id: "3", text: "text3"},
    {id: "4", text: "text4"},
]

export default function Progress() {

    const [data, setData] = useState(initial);

    const renderItem = useCallback<SortableGridRenderItem<any>>(
        ({item}) => (
            <View style={styles.card}>
                <Text>{item.text}</Text>
            </View>
        )  
    , []);

    return (
        <>
        <View style={{flex:1}}>
            <Text>Hello</Text>
            <Sortable.Grid 
            columns={1}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            rowGap={10}
            columnGap={10}
            overDrag="none"
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        paddingHorizontal: 0,
        marginHorizontal: 20,
        paddingTop: StatusBar.currentHeight
        // backgroundColor: 'red'
      },
    card: {
        height: 48,
        padding: 12,
        backgroundColor: "#cacacaff",
        borderRadius: 6,
    }
})