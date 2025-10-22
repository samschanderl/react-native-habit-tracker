import {View, Text, StyleSheet} from 'react-native';
import { Habit } from '../context/HabitContext';

const HabitItem = ({item}: {item: Habit}) => {

    return (
    <View style={styles.habitItem}>
        <Text>{item.text}</Text>
    </View>
    )
}

export default HabitItem;

const styles = StyleSheet.create({
    habitItem: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})