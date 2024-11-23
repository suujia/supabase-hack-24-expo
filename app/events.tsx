import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PremiumEvents() {
  const events = [
    {
      id: 1,
      title: "Strategy Meeting",
      time: "10:00 AM",
      date: "Today",
      location: "Conference Room A",
      type: "Meeting"
    },
    {
      id: 2,
      title: "Project Review",
      time: "2:30 PM",
      date: "Today",
      location: "Virtual",
      type: "Call"
    },
    {
      id: 3,
      title: "Team Lunch",
      time: "12:00 PM",
      date: "Tomorrow",
      location: "Bistro Garden",
      type: "Social"
    }
  ];

  return (
    <View className="flex-1 bg-[#1A1A1A]">
      <LinearGradient
        colors={['#2C2C2C', '#1A1A1A']}
        className="flex-1"
      >
        {/* Header */}
        <View className="pt-24 px-6 pb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-4xl font-bold text-white">Events</Text>
            <Text className="text-gray-400 mt-2 text-lg">Your schedule</Text>
          </View>
          <Link href="/" asChild>
            <TouchableOpacity>
              <FontAwesome name="close" size={24} color="#E5E5E5" />
            </TouchableOpacity>
          </Link>
        </View>

        {/* Event Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 py-4">
          <TouchableOpacity className="bg-[#4A4A4A] mr-4 px-6 py-2 rounded-full">
            <Text className="text-white">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Meetings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Calls</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Social</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Events List */}
        <ScrollView className="flex-1 px-6">
          {events.map((event) => (
            <TouchableOpacity
              key={event.id}
              className="bg-[#2C2C2C] mb-4 p-4 rounded-xl border border-gray-700"
            >
              <View className="flex-row items-center">
                <View className="bg-[#3C3C3C] p-3 rounded-lg">
                  <FontAwesome 
                    name={event.type === "Meeting" ? "users" : event.type === "Call" ? "phone" : "cutlery"} 
                    size={20} 
                    color="#E5E5E5" 
                  />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-white font-semibold">{event.title}</Text>
                  <Text className="text-gray-400 mt-1">{event.time} - {event.location}</Text>
                  <Text className="text-gray-500 text-sm mt-2">{event.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Add Event Button */}
        <View className="px-6 pb-8">
          <TouchableOpacity 
            className="bg-[#4A4A4A] p-4 rounded-full flex-row items-center justify-center"
            activeOpacity={0.7}
          >
            <FontAwesome name="plus" size={24} color="#E5E5E5" />
            <Text className="text-white ml-2 text-lg">Add Event</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}