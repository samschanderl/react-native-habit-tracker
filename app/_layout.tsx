import { Stack } from "expo-router";
import { ModalProvider } from "./context/ModalContext";
import { HabitProvider } from "./context/HabitContext";


export default function RootLayout() {
  return (
    <HabitProvider>
      <ModalProvider>
        <Stack >
          {/* <Stack.Screen name="tabs" options={{headerShown: false}} /> */}
        </Stack>
      </ModalProvider>
    </HabitProvider>

  )
;
}
