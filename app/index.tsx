import { Text, View, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {
  return (
    <View className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="pt-16 px-6 pb-6 bg-slate-800">
        <Text className="text-3xl font-bold text-white">AI Assistant</Text>
        <Text className="text-slate-400 mt-2">Your personal AI companion</Text>
      </View>

      {/* Main Content */}
      <View className="flex-1 px-6 py-8">
        {/* Voice Assistant Button */}
        <TouchableOpacity className="items-center justify-center bg-blue-600 rounded-full w-32 h-32 mx-auto mb-8">
          <FontAwesome name="microphone" size={48} color="white" />
        </TouchableOpacity>
        
        {/* Quick Actions */}
        <View className="space-y-4">
          <Link href="/events" asChild>
            <TouchableOpacity className="flex-row items-center p-4 bg-slate-800 rounded-xl">
              <FontAwesome name="calendar" size={24} color="#60A5FA" />
              <View className="ml-4">
                <Text className="text-white text-lg font-semibold">Events</Text>
                <Text className="text-slate-400">Find and book events near you</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/news" asChild>
            <TouchableOpacity className="flex-row items-center p-4 bg-slate-800 rounded-xl">
              <FontAwesome name="newspaper-o" size={24} color="#60A5FA" />
              <View className="ml-4">
                <Text className="text-white text-lg font-semibold">News Feed</Text>
                <Text className="text-slate-400">Top stories and tweets</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/history" asChild>
            <TouchableOpacity className="flex-row items-center p-4 bg-slate-800 rounded-xl">
              <FontAwesome name="history" size={24} color="#60A5FA" />
              <View className="ml-4">
                <Text className="text-white text-lg font-semibold">History</Text>
                <Text className="text-slate-400">View past interactions</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
