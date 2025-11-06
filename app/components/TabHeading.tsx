import { View, StyleSheet, Pressable, Text, PressableProps } from "react-native";

interface TabHeadingElements {
  id: string,
  title: string,
  isActive: boolean
}

type TabHeadingProps = PressableProps & {
  elements?: TabHeadingElements[],
  setElements: React.Dispatch<React.SetStateAction<HabitStatusFilter[]>>
}


const TabHeading = ({elements, setElements}: TabHeadingProps) => {

    const onPressHandler = (id: string) => {
      if (!elements || !id) return;
      let els = elements.map(el => {
        if (el.id === id) el.isActive = true;
        else el.isActive = false;
        return el;
      });
      console.warn('setting active tab id:', id);
      setElements([...els])
    }

    return (
        <View style={styles.tabHeading}>
            {elements && elements.map(el => (
                <Pressable 
                key={el.id}
                style={styles.tabHeadingBtnWrapper}
                onPress={() => onPressHandler(el.id)}
                >
                    <Text style={[styles.tabHeadingText, el.isActive ? styles.tabHeadingTextActive : null]}>{el.title}</Text>
                    <View style={[styles.tabHeadingUnderline, el.isActive ? styles.tabHeadingUnderlineActive : null]}></View>
                </Pressable>
            ))}
        </View>
    )
}

export default TabHeading;

const styles = StyleSheet.create({
  tabHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  tabHeadingBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  tabHeadingText: {
    width: 100,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    textAlign: 'center'
  },
  tabHeadingTextActive: {
    fontWeight: 'bold',
  },
  tabHeadingUnderline: {
    backgroundColor: '#d8d8d8ff',
    height: 1,
    width: '70%',
    borderRadius: 10,
  },
  tabHeadingUnderlineActive: {
    backgroundColor: '#333',
    height: 2,
  }
})