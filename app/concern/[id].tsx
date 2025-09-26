import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View, Image } from 'react-native';
import { Text } from '@/components/ui/text';
import { getConcernById } from '@/lib/concerns';
import { ConcernItem } from '@/lib/utils';

export default function ConcernDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  let concern: ConcernItem | undefined = id ? getConcernById(String(id)) : undefined;

  // Fallback demo content if the concern is not in the in-memory store (e.g., home uses mock items)
  if (!concern) {
    concern = {
      id: String(id ?? 'demo'),
      title: 'Traffic Accident',
      description: 'Two vehicles collided near the intersection. Minor injuries reported. Debris on the road.',
      category: 'Traffic Accident',
      imageUri: undefined,
      location: 'Near Matarik Bridge',
      date: 'Sept 10, 2025 at 9:15 AM',
      status: 'Responding',
      timeline: [
        { type: 'Acknowledged', at: 'Sept 10, 2025 • 9:17 AM', by: 'Purok Leader' },
        { type: 'Responding', at: 'Sept 10, 2025 • 9:22 AM', by: 'Traffic Enforcer', notes: 'Units dispatched to the scene' },
        // Resolved intentionally missing to show a pending step in UI
      ],
    };
  }

  const events = [
    { label: 'Acknowledged', type: 'Acknowledged' as const },
    { label: 'Responding', type: 'Responding' as const },
    { label: 'Resolved', type: 'Resolved' as const },
  ];

  // Merge default steps with any existing timeline events
  const timeline = events.map((step) => {
    const evt = (concern.timeline || []).find((e) => e.type === step.type);
    return {
      label: step.label,
      done: Boolean(evt),
      at: evt?.at,
      by: evt?.by,
      notes: evt?.notes,
    };
  });

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4 gap-4">
        <View className="gap-1">
          <Text className="text-xl font-semibold">{concern.title}</Text>
          <Text className="text-sm text-muted-foreground">{concern.category}</Text>
          <Text className="text-xs text-muted-foreground">Reported: {concern.date}</Text>
        </View>

        {concern.imageUri ? (
          <Image source={{ uri: concern.imageUri }} className="w-full h-48 rounded-xl" />
        ) : null}

        <View className="gap-2">
          <Text className="text-base font-medium">Description</Text>
          <Text className="text-muted-foreground">{concern.description}</Text>
        </View>

        <View className="gap-3 mt-2">
          <Text className="text-base font-medium">Timeline</Text>
          <View className="pl-2 pr-1">
            {timeline.map((item, idx) => (
              <View key={item.label} className="flex-row">
                {/* rail */}
                <View className="items-center">
                  <View className={`w-3 h-3 rounded-full mt-1 ${item.done ? 'bg-blue-600' : 'bg-gray-300'}`} />
                  {idx < timeline.length - 1 && (
                    <View className={`w-[2px] flex-1 ${timeline[idx + 1].done ? 'bg-blue-600' : 'bg-gray-200'}`} />
                  )}
                </View>
                {/* content */}
                <View className="ml-3 pb-6 flex-1">
                  <View className={`rounded-xl border ${item.done ? 'border-blue-200 bg-blue-50/60 dark:border-blue-900/40 dark:bg-blue-900/20' : 'border-border bg-card'}`}>
                    <View className="p-3 gap-1">
                      <Text className={`font-medium ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>{item.label}</Text>
                      {item.done ? (
                        <View className="gap-0.5">
                          {item.at ? <Text className="text-xs text-muted-foreground">{item.at}</Text> : null}
                          {item.by ? <Text className="text-xs text-muted-foreground">By {item.by}</Text> : null}
                          {item.notes ? <Text className="text-xs text-muted-foreground">{item.notes}</Text> : null}
                        </View>
                      ) : (
                        <Text className="text-xs text-muted-foreground">Pending</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


