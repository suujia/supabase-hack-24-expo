import { Text, View, TouchableOpacity, Alert } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import { useEffect } from 'react';
import { Audio } from 'expo-av';

export default function Index() {
  useEffect(() => {
    const requestMicrophonePermission = async () => {
      try {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permission Required',
            'Microphone access is required for this feature to work properly.',
            [{ text: 'OK' }]
          );
        }
      } catch (error) {
        console.error('Error requesting microphone permission:', error);
      }
    };

    requestMicrophonePermission();
  }, []);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-16 px-6 pb-6 bg-blue-500">
        <Text className="text-3xl font-bold text-white">AI Assistant</Text>
        <Text className="text-blue-100 mt-2">Your personal AI companion</Text>
      </View>

      <WebView 
        source={{ uri: 'https://superhack.onrender.com' }}
        style={{ flex: 1 }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        onLoadEnd={() => console.log('WebView loaded')}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

      {/* Main Content */}
      <View className="flex-1 px-6 py-8">
        {/* Voice Assistant Button */}
        {/* <TouchableOpacity 
          className="items-center justify-center bg-blue-500 rounded-full w-32 h-32 mx-auto mb-8 active:bg-blue-600"
          onPress={() => {
            console.log('Voice assistant pressed');
          }}
        >
          <FontAwesome name="microphone" size={48} color="white" />
        </TouchableOpacity>
         */}
        {/* Quick Actions */}
        <View className="space-y-4">
          <Link href="/events" asChild>
            <TouchableOpacity 
              className="flex-row items-center p-4 bg-gray-50 rounded-xl border border-gray-200 active:bg-gray-100"
            >
              <FontAwesome name="calendar" size={24} color="#3B82F6" />
              <View className="ml-4">
                <Text className="text-gray-900 text-lg font-semibold">Events</Text>
                <Text className="text-gray-600">Find and book events near you</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/news" asChild>
            <TouchableOpacity 
              className="flex-row items-center p-4 bg-gray-50 rounded-xl border border-gray-200 active:bg-gray-100"
            >
              <FontAwesome name="newspaper-o" size={24} color="#3B82F6" />
              <View className="ml-4">
                <Text className="text-gray-900 text-lg font-semibold">News Feed</Text>
                <Text className="text-gray-600">Stay updated with latest news</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/history" asChild>
            <TouchableOpacity 
              className="flex-row items-center p-4 bg-gray-50 rounded-xl border border-gray-200 active:bg-gray-100"
            >
              <FontAwesome name="history" size={24} color="#3B82F6" />
              <View className="ml-4">
                <Text className="text-gray-900 text-lg font-semibold">History</Text>
                <Text className="text-gray-600">View your past interactions</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
