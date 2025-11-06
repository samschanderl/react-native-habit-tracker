import { Stack } from "expo-router";
import { ModalProvider } from "./context/ModalContext";
import { HabitProvider } from "./context/HabitContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <HabitProvider>
      <ModalProvider>
        <GestureHandlerRootView style={{flex:1}}>
        
        <Stack 
        screenOptions={{headerShown:false}}
        >
          {/* <Stack.Screen name="tabs" options={{headerShown: false}} /> */}
        </Stack>
        </GestureHandlerRootView>
      </ModalProvider>
    </HabitProvider>

  )
;
}
