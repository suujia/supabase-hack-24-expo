import { Text, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('Sophie');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 18) return 'Good afternoon';
      return 'Good evening';
    };
    setGreeting(getGreeting());

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

  const handleSpeakPress = () => {
    setIsSpeaking(true);
  };

  const handleStopPress = () => {
    setIsSpeaking(false);
  };

  return (
    <View className="flex-1 bg-[#1A1A1A]">
      <LinearGradient
        colors={['#2C2C2C', '#1A1A1A']}
        className="flex-1"
      >
        {/* Header */}
        <View className="pt-24 px-6 pb-6">
          <Text className="text-4xl font-bold text-white">{greeting}, {userName}</Text>
          <Text className="text-gray-400 mt-2 text-lg">How may I assist you today?</Text>
        </View>

        {/* Quick Actions */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 py-4">
          <Link href="/events" asChild>
            <TouchableOpacity className="bg-[#2C2C2C] mr-4 p-4 rounded-xl border border-gray-700">
              <FontAwesome name="calendar" size={24} color="#E5E5E5" />
              <Text className="text-white mt-2">Events</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/history" asChild>
            <TouchableOpacity className="bg-[#2C2C2C] mr-4 p-4 rounded-xl border border-gray-700">
              <FontAwesome name="history" size={24} color="#E5E5E5" />
              <Text className="text-white mt-2">History</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/news" asChild>
            <TouchableOpacity className="bg-[#2C2C2C] mr-4 p-4 rounded-xl border border-gray-700">
              <FontAwesome name="newspaper-o" size={24} color="#E5E5E5" />
              <Text className="text-white mt-2">News</Text>
            </TouchableOpacity>
          </Link>
        </ScrollView>
        

        {/* Hidden WebView when speaking */}
        {isSpeaking && (
          <View style={{ width: 1, height: 1, overflow: 'hidden', position: 'absolute' }}>
            <WebView 
              source={{ uri: 'https://superhack.onrender.com/' }}
              style={{ width: 1, height: 1 }}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
              }}
              onLoadEnd={() => console.log('WebView loaded')}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>
        )}

        <View className="flex-1" />

        {/* Input Area */}
        <View className="px-6 pb-8 mt-4">
          <TouchableOpacity 
            className={`${isSpeaking ? 'bg-[#FF4444]' : 'bg-[#4A4A4A]'} p-4 rounded-full flex-row items-center justify-center`}
            activeOpacity={0.7}
            onPress={isSpeaking ? handleStopPress : handleSpeakPress}
          >
            <FontAwesome name={isSpeaking ? "stop" : "microphone"} size={24} color="#E5E5E5" />
            <Text className="text-white ml-2 text-lg">
              {isSpeaking ? 'Listening... (Tap to stop)' : 'Tap to speak'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
