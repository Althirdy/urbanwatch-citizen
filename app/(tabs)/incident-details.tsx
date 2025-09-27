import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MapPin, AlertTriangle, Calendar } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

export default function IncidentDetailsScreen() {
  const params = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('Snapshot');

  // Mock data - in real app, this would come from your data source
  const incidentData = {
    title: params.title || 'Road Accident near Quirino Highway',
    location: params.location || 'EDSA-Shaw Boulevard Intersection',
    type: params.type || 'Car Collision',
    date: params.date || '1/15/2024',
    description: params.description || 'At around 8:20 PM, a 2-vehicle collision occurred at Quirino Highway, Barangay 175. Traffic enforcers are on the way. Expect moderate to heavy congestion in the area. Please take alternate routes.',
    status: params.status || 'Acknowledged',
    evidence: params.evidence || 'CCTV Snapshot • 2:34 PM'
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Fixed Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="flex-row items-center py-2"
          >
            <ArrowLeft size={24} color="black" strokeWidth={2} />
            <Text className="text-black ml-2 text-base font-medium">Back</Text>
          </TouchableOpacity>
          <View className="absolute left-0 right-0 items-center">
            <Text className="text-black text-lg font-bold">
              Incident Details
            </Text>
          </View>
          <View className="w-16" />
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text className="text-black text-xl font-bold mb-6 mt-6">
          {incidentData.title}
        </Text>

        {/* Details Card */}
        <View className="bg-gray-100 rounded-2xl p-6 mb-6 border border-gray-200">
          <Text className="text-black text-lg font-semibold mb-4">Details</Text>
          
          <View className="space-y-4">
            {/* Location */}
            <View className="flex-row items-center">
              <MapPin size={20} color="#6B7280" strokeWidth={2} />
              <Text className="text-gray-700 ml-3 flex-1">{incidentData.location}</Text>
            </View>

            {/* Incident Type */}
            <View className="flex-row items-center">
              <AlertTriangle size={20} color="#6B7280" strokeWidth={2} />
              <Text className="text-gray-700 ml-3 flex-1">{incidentData.type}</Text>
            </View>

            {/* Date */}
            <View className="flex-row items-center">
              <Calendar size={20} color="#6B7280" strokeWidth={2} />
              <Text className="text-gray-700 ml-3 flex-1">Published {incidentData.date}</Text>
            </View>
          </View>
        </View>

        {/* Description Card */}
        <View className="bg-gray-100 rounded-2xl p-6 mb-6 border border-gray-200">
          <Text className="text-black text-lg font-semibold mb-4">Description</Text>
          <Text className="text-gray-700 leading-6">
            {incidentData.description}
          </Text>
        </View>

        {/* Evidence Section */}
        <View className="bg-gray-100 rounded-2xl p-6 mb-8 border border-gray-200">
          <Text className="text-black text-lg font-semibold mb-4">Evidences</Text>
          
          {/* Tab Buttons */}
          <View className="flex-row mb-4">
            <TouchableOpacity 
              className={`px-6 py-2 rounded-full mr-3 ${activeTab === 'Snapshot' ? 'bg-orange-500' : 'bg-gray-300'}`}
              onPress={() => setActiveTab('Snapshot')}
            >
              <Text className={`font-medium ${activeTab === 'Snapshot' ? 'text-white' : 'text-gray-700'}`}>
                Snapshot
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className={`px-6 py-2 rounded-full ${activeTab === 'Map View' ? 'bg-orange-500' : 'bg-gray-300'}`}
              onPress={() => setActiveTab('Map View')}
            >
              <Text className={`font-medium ${activeTab === 'Map View' ? 'text-white' : 'text-gray-700'}`}>
                Map View
              </Text>
            </TouchableOpacity>
          </View>

          {/* Evidence Content */}
          <View className="bg-gray-200 rounded-xl p-4 h-48 items-center justify-center">
            {activeTab === 'Snapshot' ? (
              <View className="items-center">
                <View className="w-16 h-16 bg-gray-300 rounded-lg items-center justify-center mb-4">
                  <View className="w-8 h-8 bg-gray-400 rounded" />
                </View>
                <Text className="text-gray-700 text-lg font-medium">CCTV Snapshot • 2:34 PM</Text>
              </View>
            ) : (
              <View className="items-center">
                <MapPin size={32} color="#6B7280" strokeWidth={2} />
                <Text className="text-gray-700 text-lg font-medium mt-2">Map View</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
