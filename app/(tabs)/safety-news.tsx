import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function SafetyNewsScreen() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold text-center mb-4">Safety News</Text>
      <Text className="text-center text-muted-foreground">
        Welcome to the Safety News tab. This is where safety updates and news will be displayed.
      </Text>
    </View>
  );
}