import { Stack } from "expo-router";
import { ModalProvider } from "./context/ModalContext";

export default function RootLayout() {
  return (
    <ModalProvider>
      <Stack >
        {/* <Stack.Screen name="tabs" options={{headerShown: false}} /> */}
      </Stack>
    </ModalProvider>

  )
;
}
