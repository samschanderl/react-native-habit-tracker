import { useCallback, useMemo, useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../constants/Colors";
import SlideInModal from '../components/SlideInModal';
import Button from "../components/Button";
import { useModal } from "../context/ModalContext";
import ModalHabitInput from "./modals/ModalHabitInput";
import { useDate } from "../context/DateContext";
import Toast from 'react-native-toast-message';
import TabHeading from "../components/TabHeading";
import { useHabits } from "../context/HabitContext";
import HabitItem from "../components/HabitItem";
import DraggableList from "../components/DraggableList";

export default function Index() {

  type HabitCategory = "personal" | "career" | "health" | "family";
  type HabitColor = "red" | "blue" | "green" | "orange" | "yellow";

  const {selectedDates} = useDate();
  const {habits, setHabits, habitStatusFilter, setHabitStatusFilter} = useHabits();
  const memoizedHabits = useMemo(() => habits, [habits]);

  const [habitsTabs, setHabitTabs] = useState<string[]>()

  type Habit = {
    id: string,
    text: string,
    isFinished: boolean,
    category: HabitCategory,
  };

  // const [habits, setHabits] = useState<Habit[]>([]);
  const {setActiveModal} = useModal();

  const openGoalsInputModalHandler = () => {
    setActiveModal({
      selectedModal: 'habitInputModal',
      isActive: true
    });
  }

  const renderDayTabs = () => {

    return (
      <Button><Text>Test</Text></Button>
    )
  };

    const renderHabitItem = useCallback(
      (item:Habit): React.ReactNode => 
      <HabitItem 
      item={item}
      />
    , [])


  return (
    <SafeAreaView style={{flex: 1}} edges={{bottom: "additive"}}>
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
      elements={habitStatusFilter}
      setElements={setHabitStatusFilter}
      />
      <DraggableList 
      data={memoizedHabits}
      renderDataItem={renderHabitItem}
        // <View style={{marginVertical: 24, backgroundColor: "red"}}><Text>{item.text}</Text></View>
      />
      {/* HABIT TRACKER ITEMS */}
      {/* <View
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
        /> */}
      {/* </View> */}
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
    marginHorizontal: 0,
    paddingTop: StatusBar.currentHeight,
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