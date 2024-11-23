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
          contentStyle: { backgroundColor: '#1A1A1A' },
          headerStyle: {
            backgroundColor: '#2C2C2C',
          },
          headerTintColor: '#E5E5E5',
          headerShadowVisible: false,
          headerBackTitle: '',
          headerTitleStyle: {
            color: '#E5E5E5',
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen 
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="news"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="history"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="events"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
