import { ScrollView, View, Image } from 'react-native';
import { Text } from '@/components/ui/text';
import ConcernList from '@/components/concern-comp/concern-list';
import { getConcerns } from '@/lib/concerns';

export default function ConcernsScreen() {
  const items = getConcerns();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4 gap-4">
        {items.length === 0 ? (
          <View className="items-center py-16">
            <Text className="text-muted-foreground">No concerns yet.</Text>
          </View>
        ) : (
          <ConcernList
            concerns={items.map((c) => ({
              id: c.id,
              title: c.title,
              location: c.location ?? c.category,
              date: c.date,
              status: c.status,
              acknowledgedBy: undefined,
            }))}
          />
        )}
      </View>
    </ScrollView>
  );
}


