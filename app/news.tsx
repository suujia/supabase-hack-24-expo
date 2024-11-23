import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

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
  return (
    <View className="flex-1 bg-slate-900">
      <View className="pt-16 px-6 pb-6 bg-slate-800">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-white">News Feed</Text>
          <Link href="/" asChild>
            <TouchableOpacity className="p-2">
              <FontAwesome name="close" size={24} color="white" />
            </TouchableOpacity>
          </Link>
        </View>
        <Text className="text-slate-400 mt-2">Latest updates and stories</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="px-6 py-8 space-y-6">
          {newsItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="bg-slate-800 rounded-xl overflow-hidden"
            >
              <Image
                source={{ uri: item.image }}
                className="w-full h-48"
                resizeMode="cover"
              />
              <View className="p-4">
                <View className="flex-row items-center">
                  <Text className="text-blue-400 font-semibold">{item.category}</Text>
                  <Text className="text-slate-400 mx-2">•</Text>
                  <Text className="text-slate-400">{item.time}</Text>
                </View>
                <Text className="text-xl font-bold text-white mt-2">{item.title}</Text>
                <View className="flex-row items-center mt-3">
                  <FontAwesome name="newspaper-o" size={16} color="#60A5FA" />
                  <Text className="text-slate-400 ml-2">{item.source}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}