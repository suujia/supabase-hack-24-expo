import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function PremiumEvents() {
  const [events] = useState([
    {
      id: 1,
      title: "SF AI Summit 2024",
      time: "9:00 AM",
      date: "Nov 23, 2024",
      location: "Moscone Center, SF",
      type: "Conference"
    },
    {
      id: 2,
      title: "HealthTech Innovation Forum",
      time: "2:00 PM",
      date: "Nov 23, 2024",
      location: "UCSF Mission Bay",
      type: "Forum"
    },
    {
      id: 3,
      title: "AI in Healthcare Meetup",
      time: "6:30 PM",
      date: "Nov 24, 2024",
      location: "SoMa, SF",
      type: "Meetup"
    },
    {
      id: 4,
      title: "Bay Area Tech Career Fair",
      time: "11:00 AM",
      date: "Nov 25, 2024",
      location: "Palace Hotel, SF",
      type: "Career Fair"
    }
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

       
        <ScrollView className="px-6">
          {events.map((event) => (
            <View 
              key={event.id} 
              className="bg-[#2C2C2C] p-6 mb-4 rounded-2xl border border-gray-800"
            >
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-[#3A3A3A] rounded-full items-center justify-center mr-3">
                    <FontAwesome 
                      name={event.type === "Meeting" ? "users" : event.type === "Call" ? "phone" : "cutlery"} 
                      size={20} 
                      color="#E5E5E5" 
                    />
                  </View>
                  <Text className="text-gray-400 text-sm">{event.date}</Text>
                </View>
                <TouchableOpacity>
                  <FontAwesome name="ellipsis-h" size={18} color="#666" />
                </TouchableOpacity>
              </View>
              
              <View className="bg-[#1A1A1A] p-4 rounded-xl mb-3">
                <Text className="text-white text-base font-semibold">{event.title}</Text>
              </View>
              
              <View className="bg-[#3A3A3A] p-4 rounded-xl">
                <Text className="text-gray-300">{event.time} - {event.location}</Text>
              </View>
            </View>
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