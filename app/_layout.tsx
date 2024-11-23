import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: true,
          contentStyle: { backgroundColor: '#FAFAF8' },
          headerStyle: {
            backgroundColor: '#3B82F6',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="events"
          options={{
            title: 'Events'
          }}
        />
        <Stack.Screen 
          name="news"
          options={{
            title: 'News Feed'
          }}
        />
        <Stack.Screen 
          name="history"
          options={{
            title: 'History'
          }}
        />
      </Stack>
    </>
  );
}
