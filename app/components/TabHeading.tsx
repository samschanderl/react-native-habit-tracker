import { View, StyleSheet, Pressable, Text, PressableProps } from "react-native";
import { useState } from "react";


type TabHeadingProps = PressableProps & {
  elements: string[]
}


const TabHeading = ({elements}: TabHeadingProps) => {

    const [activeTab, setActiveTab] = useState(elements[0]);

    const onPressHandler = (id: string) => {
      if (!id) return;
      console.warn('setting active tab id:', id);
      setActiveTab(id);
    }

    return (
        <View style={styles.tabHeading}>
            {elements && elements.map(el => (
                <Pressable 
                style={styles.tabHeadingBtnWrapper}
                onPress={() => onPressHandler(el)}
                >
                    <Text style={[styles.tabHeadingText, activeTab === el ? styles.tabHeadingTextActive : null]}>{el}</Text>
                    <View style={[styles.tabHeadingUnderline, activeTab === el ? styles.tabHeadingUnderlineActive : null]}></View>
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