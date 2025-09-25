import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function MapsScreen() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold text-center mb-4">Maps</Text>
      <Text className="text-center text-muted-foreground">
        Welcome to the Maps tab. This is where location and mapping features will be displayed.
      </Text>
    </View>
  );
}