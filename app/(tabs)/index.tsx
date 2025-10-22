import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, FlatList, ScrollView, Modal, ToastAndroid } from "react-native";
import Add from '@mui/icons-material/AccessAlarm';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../constants/Colors";
import SlideInModal from '../components/SlideInModal';
import Button from "../components/Button";
import { useModal } from "../context/ModalContext";
import ModalHabitInput from "./modals/ModalHabitInput";
import { useDate } from "../context/DateContext";
import Toast from 'react-native-toast-message';
import { Background } from "@react-navigation/elements";
import TabHeading from "../components/TabHeading";
import { useHabits } from "../context/HabitContext";
import HabitItem from "../components/HabitItem";


export default function Index() {

  type HabitCategory = "personal" | "career" | "health" | "family";
  type HabitColor = "red" | "blue" | "green" | "orange" | "yellow";

  const {selectedDates} = useDate();
  const {habits} = useHabits();

  type Habit = {
    id: string,
    text: string,
    isFinished: boolean,
    category: HabitCategory,
    color: HabitColor
  }


  // const [habits, setHabits] = useState<Habit[]>([]);
  const initialRender = useRef(true);
  const {activeModal, setActiveModal} = useModal();

  const openGoalsInputModalHandler = () => {
    setActiveModal({
      selectedModal: 'habitInputModal',
      isActive: true
    })
  }

  const renderDayTabs = () => {

    return (
      <Button><Text>Test</Text></Button>
    )
  }

  useEffect(() => {
    let initialHabit: Habit = {
      id: 'initial',
      text: 'Ready to add your first habit? Click the "+" button to get started.',
      isFinished: false,
      category: "personal",
      color: "red"
    }
    if (initialRender) {
      // setHabits([initialHabit]);
      initialRender.current = false;
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}} edges={{bottom: 'off'}}>
    <View
      style={styles.outerContainer}

    >
      {/* DAY SELECTION */}
      <View>
        {renderDayTabs()}
      </View>
      {/* CHART PLACEHOLDER AREA */}
      {/* <View>
        <View style={styles.chartPlaceholder}></View>
      </View> */}
      {/* HABIT TRACKER HEADING MENU */}
      <TabHeading 
        elements={["Open", "Done", "All"]}
      />
      {/* HABIT TRACKER ITEMS */}
      <View
        style={
          {
            flex: 1,
            display: 'flex'
          }
        }
        >
        <FlatList 
        style={{
        }}
          data={habits}
          renderItem={(itemData) => <HabitItem item={itemData.item} />}
        />
      {/* ADD BUTTON */}
      </View>
      <View style={styles.btnAddContainer}>
          <Button
          onPress={openGoalsInputModalHandler}
          >
            <MaterialIcons name="add" size={28} color={Colors.light.gray700}/>
          </Button>
        </View>
      </View>
      <View style={{height: 0}}>
        <SlideInModal>
          <ModalHabitInput />
        </SlideInModal>
      </View>
      <Toast/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    paddingHorizontal: 0,
    marginHorizontal: 20
    // backgroundColor: 'red'
  },
  chartPlaceholder: {
    backgroundColor: '#8ee68a',
    height: 150,
    width: 150,
    borderRadius: 100
  },
  btnAddContainer: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  btnAdd: {
    width: 60,
    height: 50,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    position: 'fixed',
    top: 0,
    right: 0,
    marginBottom: 10
  },
  iconPlusSign: {
    width: 30,
    height: 30,
    color: 'black'
  }
})