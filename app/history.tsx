import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const getIconName = (type: string) => {
  switch (type) {
    case 'weather':
      return 'cloud';
    case 'reminder':
      return 'clock-o';
    case 'music':
      return 'music';
    default:
      return 'comment';
  }
};

export default function History() {
  const [historyItems] = useState([
    {
      id: 1,
      query: `What's the weather today?`,
      response: 'The weather is sunny with a high of 75°F',
      time: '2 hours ago',
      type: 'weather',
    },
    {
      id: 2,
      query: 'Set a reminder for meeting',
      response: 'Reminder set for team meeting at 2 PM',
      time: '5 hours ago',
      type: 'reminder',
    },
    {
      id: 3,
      query: 'Play some music',
      response: 'Playing your favorite playlist',
      time: 'Yesterday',
      type: 'music',
    },
  ]);

  return (
    <View className="flex-1 bg-[#1A1A1A]">
      <LinearGradient
        colors={['#2C2C2C', '#1A1A1A']}
        className="flex-1"
      >
        {/* Header */}
        <View className="pt-24 px-6 pb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-4xl font-bold text-white">History</Text>
            <Text className="text-gray-400 mt-2 text-lg">Your past interactions</Text>
          </View>
          <Link href="/" asChild>
            <TouchableOpacity>
              <FontAwesome name="close" size={24} color="#E5E5E5" />
            </TouchableOpacity>
          </Link>
        </View>

        {/* Filter Options */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 py-4">
          <TouchableOpacity className="bg-[#4A4A4A] mr-4 px-6 py-2 rounded-full">
            <Text className="text-white">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Reminders</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Searches</Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView className="px-6">
          {historyItems.map((item) => (
            <View 
              key={item.id} 
              className="bg-[#2C2C2C] p-6 mb-4 rounded-2xl border border-gray-800"
            >
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-[#3A3A3A] rounded-full items-center justify-center mr-3">
                    <FontAwesome name={getIconName(item.type)} size={20} color="#E5E5E5" />
                  </View>
                  <Text className="text-gray-400 text-sm">{item.time}</Text>
                </View>
                <TouchableOpacity>
                  <FontAwesome name="ellipsis-h" size={18} color="#666" />
                </TouchableOpacity>
              </View>
              
              <View className="bg-[#1A1A1A] p-4 rounded-xl mb-3">
                <Text className="text-white text-base">{item.query}</Text>
              </View>
              
              <View className="bg-[#3A3A3A] p-4 rounded-xl">
                <Text className="text-gray-300">{item.response}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Clear History Button */}
        <View className="px-6 pb-8">
          <TouchableOpacity 
            className="bg-[#4A4A4A] p-4 rounded-full flex-row items-center justify-center"
            activeOpacity={0.7}
          >
            <FontAwesome name="trash" size={24} color="#E5E5E5" />
            <Text className="text-white ml-2 text-lg">Clear History</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}