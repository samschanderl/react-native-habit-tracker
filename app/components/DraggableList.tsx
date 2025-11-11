import { SetStateAction, useCallback } from "react";
import { Text, TouchableOpacity, StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from 'react-native-sortables';

type DraggableListProps<T> = {
    data: T[],
    renderDataItem: (item: T) => React.ReactNode
}

type RenderItemProps<T> = {
    item: T;
}


// try with other package: https://github.com/omahili/react-native-reorderable-list

const DraggableList = <T extends {id: string}> ({data, renderDataItem}:DraggableListProps<T>) => {

    const renderItem = useCallback<SortableGridRenderItem<any>>(({item}: RenderItemProps<T>) => {
        return(
            renderDataItem(item)
        )
    }, []);

    return (
    <>
        <SafeAreaView style={{flex: 1}} edges={{bottom: "additive"}}>
            <View style={styles.outerContainer}>
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
        </SafeAreaView>   
    </>)
};

export default DraggableList;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: 'relative',
        paddingHorizontal: 0,
        marginHorizontal: 20,
        paddingTop: 10,
        // paddingTop: StatusBar.currentHeight,
        // backgroundColor: 'red'
      },
    rowItem: {
        height: 50,
        backgroundColor: "#fff"
    }
})