import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
  screenOptions={{
    headerShown: false,
    headerStyle: { backgroundColor: "#5C9E3F" },
    headerTitle: "",
    headerShadowVisible: false,
  }}
/>

  );
}