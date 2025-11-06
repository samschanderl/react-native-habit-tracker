import { useState } from "react";
import { Pressable, Text, Touchable, View } from "react-native";
import DraggableFlatList, { ScaleDecorator } from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const initial = [
    {id: "1", title: "do sports"},
    {id: "2", title: "read a book"},
    {id: "3", title: "do the laundry"},
    {id: "4", title: "eat clean"},
]


export default function Goals() {

    const [data, setData] = useState(initial);
    const renderItem = ({item, drag, isActive}: any) => (
        <ScaleDecorator>
            <View style={{
                backgroundColor: '#f2f2f2',
                paddingVertical: 6,
                paddingHorizontal: 12
            }}
            >
                <Pressable
                onLongPress={drag}
                >
                <Text>{item.title}</Text>

                </Pressable>
            </View>
        </ScaleDecorator>
    )

    return (
            <GestureHandlerRootView>
                <DraggableFlatList
                data={data}
                keyExtractor={(item) => item.id}
                onDragEnd={({data}) => setData(data)}
                renderItem={renderItem}
                />
            </GestureHandlerRootView>
    )
}