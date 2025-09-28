import React from 'react';
import { Text } from '@/components/ui/text';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, CardContent } from '@/components/ui/card';
import { useColorScheme } from 'nativewind';
import { ArrowLeft, MapPin, Clock, Eye, AlertTriangle, Camera, Share, Flag } from 'lucide-react-native';
import { PublicReport } from './types';

interface ReportDetailProps {
  report: PublicReport;
  onBack: () => void;
}

function getCategoryIcon(category: string, colorScheme: string) {
  const iconColor = colorScheme === 'dark' ? '#9ca3af' : '#6b7280';
  switch (category) {
    case 'Road Accident':
    case 'Crime':
    case 'Fire':
    case 'Emergency':
      return <AlertTriangle size={20} color={iconColor} />;
    default:
      return <AlertTriangle size={20} color={iconColor} />;
  }
}

export default function ReportDetail({ report, onBack }: ReportDetailProps) {
  const { colorScheme } = useColorScheme();

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <TouchableOpacity onPress={onBack} className="flex-row items-center">
          <ArrowLeft size={24} color={colorScheme === 'dark' ? '#f3f4f6' : '#1f2937'} />
          <Text className="text-lg font-medium text-foreground ml-2">Back</Text>
        </TouchableOpacity>
        
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity>
            <Share size={22} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Flag size={22} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4">
        {/* Category Header */}
        <View className="flex-row items-center mb-4">
          <View className="flex-row items-center">
            {getCategoryIcon(report.category, colorScheme || 'light')}
            <Text className="text-sm text-muted-foreground ml-2 font-medium">
              {report.category}
            </Text>
            {report.image && (
              <View className="flex-row items-center ml-4">
                <Camera size={16} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Text className="text-sm text-muted-foreground ml-1">Photo Attached</Text>
              </View>
            )}
          </View>
        </View>

        {/* Title */}
        <Text className="text-2xl font-bold text-foreground mb-4 leading-8">
          {report.title}
        </Text>

        {/* Image */}
        {report.image && (
          <Card className="mb-6 overflow-hidden">
            <Image
              source={{ uri: report.image }}
              className="w-full h-64 bg-gray-200 dark:bg-gray-700"
              resizeMode="cover"
              onError={() => {
                console.log('Failed to load image:', report.image);
              }}
            />
          </Card>
        )}

        {/* Location and Time Info */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <Text className="text-lg font-semibold text-foreground mb-3">Location & Time</Text>
            
            <View className="flex-row items-center mb-3">
              <MapPin size={18} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <Text className="text-base text-foreground ml-3 flex-1">
                {report.location}
              </Text>
            </View>
            
            <View className="flex-row items-center mb-3">
              <Clock size={18} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <Text className="text-base text-muted-foreground ml-3">
                Reported {report.timeAgo}
              </Text>
            </View>

            <View className="flex-row items-center">
              <Eye size={18} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <Text className="text-base text-muted-foreground ml-3">
                {report.views} people have viewed this report
              </Text>
            </View>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <Text className="text-lg font-semibold text-foreground mb-3">Details</Text>
            <Text className="text-base text-foreground leading-6">
              {report.fullDescription || report.description}
            </Text>
          </CardContent>
        </Card>

        {/* Reporter Info */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <Text className="text-lg font-semibold text-foreground mb-3">Reported By</Text>
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-blue-500 items-center justify-center mr-4">
                <Text className="text-lg text-white font-bold">
                  {report.reportedBy.charAt(0)}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-foreground">
                  {report.reportedBy}
                </Text>
                <Text className="text-sm text-muted-foreground">
                  Community Reporter
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Status */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <Text className="text-lg font-semibold text-foreground mb-3">Status</Text>
            <View className="flex-row items-center">
              <View className="w-3 h-3 rounded-full bg-green-500 mr-3" />
              <Text className="text-base text-foreground">
                {report.status || 'Under Review'}
              </Text>
            </View>
            <Text className="text-sm text-muted-foreground mt-2">
              Authorities have been notified and are reviewing this report.
            </Text>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity className="flex-1 bg-blue-600 py-4 px-6 rounded-xl">
            <Text className="text-white font-semibold text-center text-base">
              View on Map
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-1 bg-gray-200 dark:bg-gray-700 py-4 px-6 rounded-xl">
            <Text className="text-foreground font-semibold text-center text-base">
              Similar Reports
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
