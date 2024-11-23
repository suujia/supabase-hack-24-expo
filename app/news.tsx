import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'AI Breakthrough in Natural Language Processing',
    source: 'Tech Daily',
    time: '2 hours ago',
    category: 'Technology',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'New Framework Revolutionizes Mobile Development',
    source: 'Dev Weekly',
    time: '4 hours ago',
    category: 'Development',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'The Future of Remote Work in Tech Industry',
    source: 'Industry Insights',
    time: '6 hours ago',
    category: 'Business',
    image: 'https://picsum.photos/200/300',
  },
];

export default function News() {
  const [newsItemsState] = useState(newsItems);

  return (
    <View className="flex-1 bg-[#1A1A1A]">
      <LinearGradient
        colors={['#2C2C2C', '#1A1A1A']}
        className="flex-1"
      >
        {/* Header */}
        <View className="pt-24 px-6 pb-6 flex-row justify-between items-center">
          <View>
            <Text className="text-4xl font-bold text-white">News Feed</Text>
            <Text className="text-gray-400 mt-2 text-lg">Stay informed</Text>
          </View>
          <Link href="/" asChild>
            <TouchableOpacity>
              <FontAwesome name="close" size={24} color="#E5E5E5" />
            </TouchableOpacity>
          </Link>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 py-4">
          <TouchableOpacity className="bg-[#4A4A4A] mr-4 px-6 py-2 rounded-full">
            <Text className="text-white">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Finance</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#2C2C2C] mr-4 px-6 py-2 rounded-full border border-gray-700">
            <Text className="text-gray-400">Environment</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* News List */}
        <ScrollView className="flex-1 px-6">
          {newsItemsState.map((news) => (
            <TouchableOpacity
              key={news.id}
              className="bg-[#2C2C2C] mb-4 rounded-xl border border-gray-700 overflow-hidden"
            >
              <Image
                source={{ uri: news.image }}
                className="w-full h-40"
                resizeMode="cover"
              />
              <View className="p-4">
                <View className="flex-row items-center justify-between">
                  <Text className="text-gray-400 text-sm">{news.source}</Text>
                  <Text className="text-gray-500 text-sm">{news.time}</Text>
                </View>
                <Text className="text-white font-semibold mt-2">{news.title}</Text>
                <View className="mt-3 bg-[#3C3C3C] self-start px-3 py-1 rounded-full">
                  <Text className="text-gray-300 text-sm">{news.category}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Refresh Button */}
        <View className="px-6 pb-8">
          <TouchableOpacity 
            className="bg-[#4A4A4A] p-4 rounded-full flex-row items-center justify-center"
            activeOpacity={0.7}
          >
            <FontAwesome name="refresh" size={24} color="#E5E5E5" />
            <Text className="text-white ml-2 text-lg">Refresh Feed</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}