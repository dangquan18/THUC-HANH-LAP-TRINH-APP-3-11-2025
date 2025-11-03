import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { StudentProvider } from "@/contexts/StudentContext";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <StudentProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
          <Stack.Screen name="hello-world" options={{ headerShown: false }} />
          <Stack.Screen name="basic-ui" options={{ headerShown: false }} />
          <Stack.Screen name="business-card" options={{ headerShown: false }} />
          <Stack.Screen
            name="grade-calculator"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="color-changer" options={{ headerShown: false }} />
          <Stack.Screen name="todo-list" options={{ headerShown: false }} />
          <Stack.Screen
            name="two-screen-home"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile-screen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tab-navigation"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="students" options={{ headerShown: false }} />
          <Stack.Screen
            name="student-detail"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="add-student" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </StudentProvider>
  );
}
