import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const events = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: 'Mar 15, 2024',
    location: 'San Francisco, CA',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'AI Summit',
    date: 'Apr 20, 2024',
    location: 'New York, NY',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'Developer Meetup',
    date: 'May 5, 2024',
    location: 'Austin, TX',
    image: 'https://picsum.photos/200/300',
  },
];

export default function Events() {
  const router = useRouter();
  
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100"
            onPress={() => console.log('Event pressed:', event.id)}
          >
            <Image
              source={{ uri: event.image }}
              className="w-full h-40 rounded-t-xl"
            />
            <View className="p-4">
              <Text className="text-xl font-semibold text-gray-900">{event.title}</Text>
              <View className="flex-row items-center mt-2">
                <FontAwesome name="calendar" size={16} color="#3B82F6" />
                <Text className="ml-2 text-gray-600">{event.date}</Text>
              </View>
              <View className="flex-row items-center mt-1">
                <FontAwesome name="map-marker" size={16} color="#3B82F6" />
                <Text className="ml-2 text-gray-600">{event.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}