import { Text } from '@/components/ui/text';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Mic, FileText } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import ConcernList from '@/components/concern-comp/concern-list';

export default function CitizenScreen() {
  const { colorScheme } = useColorScheme();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        {/* Incident Concern Report Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-foreground mb-2">
            Incident Concern Report
          </Text>
          <Text className="text-sm text-muted-foreground mb-6">
            Raise your incident concern quickly and efficiently
          </Text>

          {/* Report Options */}
          <View className="flex flex-col gap-2">
            {/* Voice Report Card */}
            <TouchableOpacity className="bg-green-100 dark:bg-green-900/30 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <View className="items-center">
                {/* Microphone Icon */}
                <View className="w-16 h-16 bg-white dark:bg-green-800 rounded-full items-center justify-center mb-4 shadow-sm">
                  <Mic
                    size={28}
                    color={colorScheme === 'dark' ? '#22c55e' : '#16a34a'}
                    strokeWidth={2}
                  />
                </View>

                {/* Voice Report Text */}
                <Text className="text-lg font-bold text-green-800 dark:text-green-200 mb-1">
                  Voice Report
                </Text>
                <Text className="text-sm text-green-700 dark:text-green-300 text-center">
                  Speak your concern
                </Text>
              </View>
            </TouchableOpacity>

            {/* Manual Report Card */}
            <TouchableOpacity className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <View className="items-center">
                {/* File Icon */}
                <View className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full items-center justify-center mb-4 shadow-sm">
                  <FileText
                    size={28}
                    color={colorScheme === 'dark' ? '#9ca3af' : '#4b5563'}
                    strokeWidth={2}
                  />
                </View>

                {/* Manual Report Text */}
                <Text className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                  Manual Report
                </Text>
                <Text className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Fill out form
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* My Incident Concerns Section */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-foreground">
              My Incident Concerns
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <ConcernList />
        </View>
      </View>
    </ScrollView>
  );
}