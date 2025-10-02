import React, { useState } from 'react';
import { Text } from '@/components/ui/text';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Card, CardContent } from '@/components/ui/card';
import { useColorScheme } from 'nativewind';
import { AlertTriangle, MapPin, Clock, Eye, Camera } from 'lucide-react-native';
import { PublicReport } from '@/components/safety-news/types';
import { tabStyles, reportCardStyles, emptyStateStyles, headerStyles } from '@/components/safety-news/styles';
import ReportDetail from '@/components/safety-news/report-detail';

// Mock data for development - replace with backend API call
const mockPublicReports: PublicReport[] = [
  {
    id: '1',
    title: 'Road Accident near Quirino Highway',
    category: 'Road Accident',
    location: 'Quirino Highway, Brgy. 175',
    timeAgo: '12 mins ago',
    description: 'Multiple vehicle collision causing traffic congestion. Emergency responders on scene.',
    reportedBy: 'Citizen Reporter',
    views: 245,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    fullDescription: 'A serious multi-vehicle collision occurred on Quirino Highway near Brgy. 175 during rush hour traffic. The accident involved three vehicles including a sedan, SUV, and delivery truck. Emergency responders including ambulance, fire department, and traffic police arrived within 10 minutes of the incident being reported. Two individuals were transported to the nearest hospital with non-life-threatening injuries. The accident has caused significant traffic congestion in both directions, and authorities are working to clear the scene. Motorists are advised to use alternative routes and expect delays in the area.',
    status: 'Active',
    timestamp: 'September 28, 2025 at 2:45 PM'
  }
];


function getCategoryIcon(category: string, colorScheme: string) {
  const iconColor = colorScheme === 'dark' ? '#9ca3af' : '#6b7280';
  switch (category) {
    case 'Road Accident':
    case 'Crime':
    case 'Fire':
    case 'Emergency':
      return <AlertTriangle size={16} color={iconColor} />;
    default:
      return <AlertTriangle size={16} color={iconColor} />;
  }
}

export default function SafetyNewsScreen() {
  const { colorScheme } = useColorScheme();
  const [activeTab, setActiveTab] = useState<'community' | 'yours'>('community');
  const [selectedReport, setSelectedReport] = useState<PublicReport | null>(null);
  
  // TODO: Replace mockPublicReports with actual API call
  // const [reports, setReports] = useState<PublicReport[]>([]);
  // const [loading, setLoading] = useState(true);
  // 
  // useEffect(() => {
  //   fetchReports();
  // }, []);
  //
  // const fetchReports = async () => {
  //   try {
  //     const response = await fetch('/api/reports');
  //     const data = await response.json();
  //     setReports(data);
  //   } catch (error) {
  //     console.error('Failed to fetch reports:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleReportSelect = (report: PublicReport) => {
    setSelectedReport(report);
  };

  const handleBackToList = () => {
    setSelectedReport(null);
  };

  if (selectedReport) {
    return <ReportDetail report={selectedReport} onBack={handleBackToList} />;
  }

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        {/* Header */}
        <View className={headerStyles.container}>
          <Text className={headerStyles.title}>
            Safety News & Reports
          </Text>
          <Text className={headerStyles.subtitle}>
            Stay informed about safety incidents and updates in your community
          </Text>
        </View>

        {/* Tab Navigation */}
        <View className={tabStyles.container}>
          <TouchableOpacity
            onPress={() => setActiveTab('community')}
            className={activeTab === 'community' ? tabStyles.activeTab : tabStyles.inactiveTab}
          >
            <Text
              className={activeTab === 'community' ? tabStyles.activeTabText : tabStyles.inactiveTabText}
            >
              Community Reports
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setActiveTab('yours')}
            className={activeTab === 'yours' ? tabStyles.activeTab : tabStyles.inactiveTab}
          >
            <Text
              className={activeTab === 'yours' ? tabStyles.activeTabText : tabStyles.inactiveTabText}
            >
              Your Reports
            </Text>
          </TouchableOpacity>
        </View>

        {/* Reports List */}
        {activeTab === 'community' ? (
          <View className="flex flex-col gap-4">
            {mockPublicReports.map((report) => (
              <TouchableOpacity key={report.id} onPress={() => handleReportSelect(report)}>
                <Card className={reportCardStyles.container}>
                  <CardContent className={reportCardStyles.content}>
                    {/* Header with category */}
                    <View className="flex-row items-center justify-between mb-3">
                      <View className={reportCardStyles.categorySection}>
                        {getCategoryIcon(report.category, colorScheme || 'light')}
                        <Text className={reportCardStyles.categoryText}>
                          {report.category}
                        </Text>
                        {report.image && (
                          <View className={reportCardStyles.photoIndicator}>
                            <Camera size={12} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
                            <Text className={reportCardStyles.photoText}>Photo</Text>
                          </View>
                        )}
                      </View>
                    </View>

                    {/* Title */}
                    <Text className={reportCardStyles.title}>
                      {report.title}
                    </Text>

                    {/* Image Thumbnail */}
                    {report.image && (
                      <View className={reportCardStyles.imageContainer}>
                        <Image
                          source={{ uri: report.image }}
                          className={reportCardStyles.image}
                          resizeMode="cover"
                          onError={() => {
                            console.log('Failed to load image:', report.image);
                          }}
                        />
                      </View>
                    )}

                    {/* Description */}
                    <Text className={reportCardStyles.description}>
                      {report.description}
                    </Text>

                    {/* Location and Time */}
                    <View className={reportCardStyles.locationTimeSection}>
                      <View className={reportCardStyles.locationContainer}>
                        <MapPin size={14} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
                        <Text className={reportCardStyles.locationText}>
                          {report.location}
                        </Text>
                      </View>
                      <View className={reportCardStyles.timeContainer}>
                        <Clock size={14} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
                        <Text className={reportCardStyles.timeText}>
                          {report.timeAgo}
                        </Text>
                      </View>
                    </View>

                    {/* Footer */}
                    <View className={reportCardStyles.footer}>
                      <View className={reportCardStyles.reporterSection}>
                        <View className={reportCardStyles.reporterAvatar}>
                          <Text className={reportCardStyles.reporterInitial}>
                            {report.reportedBy.charAt(0)}
                          </Text>
                        </View>
                        <Text className={reportCardStyles.reporterName}>
                          {report.reportedBy}
                        </Text>
                      </View>
                      <View className={reportCardStyles.viewsSection}>
                        <Eye size={14} color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'} />
                        <Text className={reportCardStyles.viewsText}>
                          {report.views}
                        </Text>
                        <TouchableOpacity className={reportCardStyles.seeMoreButton}>
                          <Text className={reportCardStyles.seeMoreText}>
                            See More
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View className={emptyStateStyles.container}>
            <View className={emptyStateStyles.iconContainer}>
              <AlertTriangle
                size={24}
                color={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
              />
            </View>
            <Text className={emptyStateStyles.title}>
              No Reports Yet
            </Text>
            <Text className={emptyStateStyles.description}>
              Your submitted reports will appear here once they are made public by authorities.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}