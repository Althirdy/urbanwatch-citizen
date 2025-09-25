import React from 'react';
import { Text } from '@/components/ui/text';
import { TouchableOpacity, View } from 'react-native';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Concern {
  id: string;
  title: string;
  location: string;
  date: string;
  status: 'Acknowledged' | 'Resolved' | 'Pending';
  acknowledgedBy?: string;
}

interface ConcernListProps {
  concerns?: Concern[];
}

const mockConcerns: Concern[] = [
  {
    id: '1',
    title: 'Traffic Accident',
    location: 'Near Matarik Bridge',
    date: 'Sept 10, 2025 at 9:15 AM',
    status: 'Acknowledged',
    acknowledgedBy: 'Purok Leader'
  },
  {
    id: '2',
    title: 'Suspicious Activity',
    location: 'Near Ph-1 wet market',
    date: 'Dec 12, 2024 at 11:45 PM',
    status: 'Resolved',
    acknowledgedBy: 'Purok Leader'
  }
];

function getStatusBadgeStyle(status: string) {
  switch (status) {
    case 'Acknowledged':
      return 'bg-blue-100 dark:bg-blue-900/30';
    case 'Resolved':
      return 'bg-green-100 dark:bg-green-900/30';
    case 'Pending':
      return 'bg-yellow-100 dark:bg-yellow-900/30';
    default:
      return 'bg-gray-100 dark:bg-gray-900/30';
  }
}

function getStatusTextStyle(status: string) {
  switch (status) {
    case 'Acknowledged':
      return 'text-blue-700 dark:text-blue-300';
    case 'Resolved':
      return 'text-green-700 dark:text-green-300';
    case 'Pending':
      return 'text-yellow-700 dark:text-yellow-300';
    default:
      return 'text-gray-700 dark:text-gray-300';
  }
}

export default function ConcernList({ concerns = mockConcerns }: ConcernListProps) {
  return (
    <View className="sflex flex-col gap-3">
      {concerns.map((concern) => (
        <Card key={concern.id} className="shadow-sm">
          <CardContent className="p-4">
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1">
                <Text className="text-base font-semibold text-foreground mb-1">
                  {concern.title}
                </Text>
                <Text className="text-sm text-muted-foreground mb-1">
                  {concern.location}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  {concern.date}
                </Text>
              </View>
              <View className={`${getStatusBadgeStyle(concern.status)} px-3 py-1 rounded-full`}>
                <Text className={`text-xs font-medium ${getStatusTextStyle(concern.status)}`}>
                  {concern.status}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between mt-3">
              <View className="flex-row items-center">
                <View className="w-4 h-4 rounded-full bg-gray-400 mr-2" />
                <Text className="text-xs text-muted-foreground">
                  {concern.acknowledgedBy ? `Acknowledged by ${concern.acknowledgedBy}` : 'Pending acknowledgment'}
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </CardContent>
        </Card>
      ))}
    </View>
  );
}