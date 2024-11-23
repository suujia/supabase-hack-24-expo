import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const historyItems = [
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
];

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
  return (
    <View className="flex-1 bg-slate-900">
      <View className="pt-16 px-6 pb-6 bg-slate-800">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-white">History</Text>
          <Link href="/" asChild>
            <TouchableOpacity className="p-2">
              <FontAwesome name="close" size={24} color="white" />
            </TouchableOpacity>
          </Link>
        </View>
        <Text className="text-slate-400 mt-2">Your past interactions</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="px-6 py-8 space-y-4">
          {historyItems.map((item) => (
            <View
              key={item.id}
              className="bg-slate-800 rounded-xl p-4"
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-blue-600 rounded-full items-center justify-center">
                    <FontAwesome name={getIconName(item.type)} size={20} color="white" />
                  </View>
                  <Text className="text-slate-400 ml-3">{item.time}</Text>
                </View>
                <TouchableOpacity className="p-2">
                  <FontAwesome name="ellipsis-h" size={16} color="#60A5FA" />
                </TouchableOpacity>
              </View>
              
              <View className="mt-3">
                <Text className="text-white font-semibold">{item.query}</Text>
                <Text className="text-slate-400 mt-1">{item.response}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}