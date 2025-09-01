import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Add from '@mui/icons-material/AccessAlarm';

export default function Index() {

  type Habit = {
    id: string,
    text: string,
    isFinished: boolean,
    category: string,
    color: string
  }

  const [habits, setHabits] = useState<Habit[]>([]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* CHART PLACEHOLDER AREA */}
      <View>
        <View style={styles.chartPlaceholder}></View>
      </View>
      {/* HABIT TRACKER ITEMS */}
      <View>
        <Text style={styles.tabHeading}>
          <Pressable style={styles.tabHeadingText}><Text style={styles.tabHeadingTextActive}>Open</Text></Pressable>
          <Pressable style={styles.tabHeadingText}><Text>Done</Text></Pressable>
          <Pressable style={styles.tabHeadingText}><Text>All</Text></Pressable>
        </Text>
      </View>
      {/* ADD BUTTON */}
      <View>
        <Pressable 
          style={styles.btnAdd}
          onPress={() => {}}
          >
          <Image 
          source={require('../../assets/images/icon_plus_dark.png')}
          style={styles.iconPlusSign}
          />
          </Pressable>
          <Text>{}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  chartPlaceholder: {
    backgroundColor: '#8ee68a',
    height: 150,
    width: 150,
    borderRadius: 100
  },
  btnAdd: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  btnAddText: {
    fontSize: 30
  },
  tabHeading: {
    display: 'flex',
  },
  tabHeadingText: {
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  tabHeadingTextActive: {
    fontWeight: 'bold'
  },
  iconPlusSign: {
    width: 30,
    height: 30,
    color: 'black'
  }
})