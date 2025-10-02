import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Alert, Modal, FlatList, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, ChevronDown, MapPin, Image as ImageIcon } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function EmergencyReportScreen() {
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [evidence, setEvidence] = useState('');
  const [showIncidentTypeModal, setShowIncidentTypeModal] = useState(false);

  const incidentTypes = [
    'Traffic Accident',
    'Fire Emergency',
    'Medical Emergency',
    'Crime Report',
    'Infrastructure Issue',
    'Environmental Hazard',
    'Public Disturbance',
    'Other'
  ];

  const handleSubmit = () => {
    if (!incidentType || !description || !location || !evidence) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }
    
    // Here you would typically send the data to your backend
    Alert.alert(
      'Report Submitted', 
      'Your emergency report has been sent to local authorities immediately.',
      [
        {
          text: 'OK',
          onPress: () => router.back()
        }
      ]
    );
  };

  const handleImageUpload = () => {
    // For now, just simulate image upload
    Alert.alert('Image Upload', 'Image upload functionality would be implemented here with expo-image-picker');
    setEvidence('Photo uploaded');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Fixed Header - Position Absolute */}
      <View className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 pt-12 pb-4 z-50">
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
              Emergency Report
            </Text>
          </View>
          <View className="w-16" />
        </View>
      </View>

      {/* Form - with top padding to account for fixed header */}
      <ScrollView className="flex-1 px-4 pt-24" showsVerticalScrollIndicator={false}>
        <View className="space-y-6 mt-6">
          {/* Incident Type */}
          <View>
            <Text className="text-black text-base font-medium mb-2">
              Incident Type*
            </Text>
            <TouchableOpacity 
              className="bg-gray-100 rounded-lg p-4 flex-row items-center justify-between border border-gray-200"
              onPress={() => setShowIncidentTypeModal(true)}
            >
              <Text className={`text-base ${incidentType ? 'text-black' : 'text-gray-500'}`}>
                {incidentType || 'Select incident type'}
              </Text>
              <ChevronDown size={20} color="#6B7280" strokeWidth={2} />
            </TouchableOpacity>
          </View>

          {/* Description */}
          <View>
            <Text className="text-black text-base font-medium mb-2">
              Description*
            </Text>
            <View className="bg-gray-100 rounded-lg p-4 border border-gray-200">
              <Textarea
                placeholder="Emergency description"
                placeholderTextColor="#6B7280"
                value={description}
                onChangeText={setDescription}
                className="text-black text-base min-h-[100px]"
                multiline
              />
            </View>
          </View>

          {/* Location */}
          <View>
            <Text className="text-black text-base font-medium mb-2">
              Location*
            </Text>
            <View className="bg-gray-100 rounded-lg p-4 flex-row items-center border border-gray-200">
              <MapPin size={20} color="#6B7280" strokeWidth={2} />
              <Input
                placeholder="Select location"
                placeholderTextColor="#6B7280"
                value={location}
                onChangeText={setLocation}
                className="text-black text-base ml-3 flex-1 border-0 bg-transparent"
              />
            </View>
          </View>

          {/* Evidence */}
          <View>
            <Text className="text-black text-base font-medium mb-2">
              Evidence*
            </Text>
            <TouchableOpacity 
              className="bg-gray-100 rounded-lg p-4 flex-row items-center border border-gray-200"
              onPress={handleImageUpload}
            >
              <ImageIcon size={20} color="#6B7280" strokeWidth={2} />
              <Text className={`text-base ml-3 ${evidence ? 'text-black' : 'text-gray-500'}`}>
                {evidence || 'Upload photo'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <View className="mt-8 mb-8">
          <Button
            onPress={handleSubmit}
            className="bg-orange-500 rounded-lg py-4"
          >
            <Text className="text-white text-lg font-semibold text-center">
              Submit Emergency Report
            </Text>
          </Button>
          
          <Text className="text-gray-600 text-sm text-center mt-3">
            Your report will be sent to local authorities immediately.
          </Text>
        </View>
      </ScrollView>

      {/* Incident Type Modal */}
      <Modal
        visible={showIncidentTypeModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowIncidentTypeModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 max-h-[50%]">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-black text-lg font-semibold">
                Select Incident Type
              </Text>
              <TouchableOpacity onPress={() => setShowIncidentTypeModal(false)}>
                <Text className="text-gray-500 text-base">Cancel</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={incidentTypes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-4 border-b border-gray-200"
                  onPress={() => {
                    setIncidentType(item);
                    setShowIncidentTypeModal(false);
                  }}
                >
                  <Text className="text-black text-base">{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
