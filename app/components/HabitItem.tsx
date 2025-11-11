import {View, Text, StyleSheet, Touchable, Pressable} from 'react-native';
import { Habit, useHabits } from '../context/HabitContext';
import { Colors } from '../constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';

const HabitItem = ({item}: {item: Habit}) => {

    const {updateHabit, habitStatusFilter, activeStatusFilter} = useHabits();
    const [showHabitItem, setShowHabitItem] = useState<boolean>(false);
    // let showHabitItem = false;

    const habitColor = {
        "personal": Colors.light.orange200,
        "family": Colors.light.blue200,
        "career": Colors.light.yellow200,
        "health": Colors.light.purple200,
        "wellbeing": Colors.light.turquoise200,
    }

    const selectedColor = habitColor[item.category];

    const onPressHandler = () => {
        updateHabit({...item, isFinished: !item.isFinished});
        console.log('you pressed me')
    };


    useEffect(() => {
        setShowHabitItem(false);
        console.log('has changed:', activeStatusFilter.id, item.isFinished);
        switch(true) {
            case activeStatusFilter.id === "open" && !item.isFinished:
                // showHabitItem = true;
                setShowHabitItem(true);
                break;
            case activeStatusFilter.id === "done" && item.isFinished:
                // showHabitItem = true;
                setShowHabitItem(true);
                break;
            case activeStatusFilter.id === "all":
                // showHabitItem = true;
                setShowHabitItem(true);
                break;
        }

    }, [habitStatusFilter, activeStatusFilter, item]);

    if (showHabitItem) return (
    <View style={styles.habitItem}>
        <View style={[styles.row, item.isFinished ? styles.rowFinished : ""]}>
            <View style={{...styles.categoryColor, backgroundColor: selectedColor}}></View>
            <Text style={[styles.text, item.isFinished ? styles.textFinished : ""]}>{item.text}</Text>
            <View style={[styles.checkbox, item.isFinished ? styles.checkboxFinished : ""]}>
                <Pressable
                style={styles.pressable}
                onPress={onPressHandler}
                >
                    <MaterialIcons 
                    size={24}
                    name="check"
                    color={!item.isFinished ? "white" : "green"}
                    />
                </Pressable>
            </View>
        </View>
    </View>
    )
}

export default HabitItem;

const styles = StyleSheet.create({
    habitItem: {
        overflow: "hidden",
        borderRadius: 10,
        position: "relative",
    },
    row: {
        paddingVertical: 6,
        paddingHorizontal: 18,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    rowFinished: {
        backgroundColor: Colors.light.green100
    },
    categoryColor: {
        backgroundColor: "green",
        width: 6,
        height: 100,
        position: "absolute"
    },
    red: {
        backgroundColor: "red"
    },
    text: {
        wordWrap: "break",
        flex: 1
    },
    textFinished: {
        color: Colors.light.green800
    },
    checkbox: {
        backgroundColor: Colors.light.gray200,
        borderRadius: 6,
        height: 40,
        width: 40,
        alignSelf: "flex-start"
    },
    checkboxFinished: {
        backgroundColor: Colors.light.green500,
    },
    pressable: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});