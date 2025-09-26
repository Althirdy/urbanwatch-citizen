import React, { useState } from 'react';
import { Text } from '@/components/ui/text';
import { View, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
  Shield,
  Settings,
  ChevronRight,
  Camera,
  Edit3
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

export default function ProfileScreen() {
  const { colorScheme } = useColorScheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);

  const [userInfo, setUserInfo] = useState({
    firstName: 'Juan',
    lastName: 'Bautista',
    email: 'juan.bautista@email.com',
    phone: '+63 912 345 6789',
    address: 'Brgy. Matarik, Marcos, Ilocos Norte'
  });

  const iconColor = colorScheme === 'dark' ? '#9CA3AF' : '#6B7280';

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <View className="items-center">
              {/* Profile Avatar */}
              <View className="relative mb-4">
                <View className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full items-center justify-center">
                  <Text className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {userInfo.firstName[0]}{userInfo.lastName[0]}
                  </Text>
                </View>
                <TouchableOpacity className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full items-center justify-center shadow-lg">
                  <Camera size={16} color="white" strokeWidth={2} />
                </TouchableOpacity>
              </View>

              <Text className="text-xl font-bold text-foreground mb-1">
                {userInfo.firstName} {userInfo.lastName}
              </Text>
              <Text className="text-sm text-muted-foreground mb-2">
                Verified Citizen
              </Text>
              <View className="flex-row items-center">
                <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <Text className="text-xs text-green-600 dark:text-green-400">
                  Active Status
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="mb-6">
          <CardHeader>
            <View className="flex-row items-center justify-between">
              <CardTitle className="flex-row items-center">
                <User size={20} color={iconColor} strokeWidth={2} />
                <Text className="ml-2 text-lg font-semibold">Personal Information</Text>
              </CardTitle>
              <TouchableOpacity>
                <Edit3 size={16} color={iconColor} strokeWidth={2} />
              </TouchableOpacity>
            </View>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <View className="space-y-4">
              {/* First Name */}
              <View>
                <Text className="text-sm font-medium text-muted-foreground mb-2">First Name</Text>
                <Input
                  value={userInfo.firstName}
                  onChangeText={(text) => setUserInfo({ ...userInfo, firstName: text })}
                  placeholder="Enter first name"
                />
              </View>

              {/* Last Name */}
              <View>
                <Text className="text-sm font-medium text-muted-foreground mb-2">Last Name</Text>
                <Input
                  value={userInfo.lastName}
                  onChangeText={(text) => setUserInfo({ ...userInfo, lastName: text })}
                  placeholder="Enter last name"
                />
              </View>

              {/* Email */}
              <View>
                <Text className="text-sm font-medium text-muted-foreground mb-2">Email</Text>
                <View className="relative">
                  <Input
                    value={userInfo.email}
                    onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
                    placeholder="Enter email address"
                    keyboardType="email-address"
                    className="pl-10"
                  />
                  <View className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail size={16} color={iconColor} strokeWidth={2} />
                  </View>
                </View>
              </View>

              {/* Phone */}
              <View>
                <Text className="text-sm font-medium text-muted-foreground mb-2">Phone Number</Text>
                <View className="relative">
                  <Input
                    value={userInfo.phone}
                    onChangeText={(text) => setUserInfo({ ...userInfo, phone: text })}
                    placeholder="Enter phone number"
                    keyboardType="phone-pad"
                    className="pl-10"
                  />
                  <View className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Phone size={16} color={iconColor} strokeWidth={2} />
                  </View>
                </View>
              </View>

              {/* Address */}
              <View>
                <Text className="text-sm font-medium text-muted-foreground mb-2">Address</Text>
                <View className="relative">
                  <Textarea
                    value={userInfo.address}
                    onChangeText={(text) => setUserInfo({ ...userInfo, address: text })}
                    placeholder="Enter your address"
                    multiline
                    numberOfLines={3}
                    className="pl-10 h-20"
                  />
                  <View className="absolute left-3 top-3">
                    <MapPin size={16} color={iconColor} strokeWidth={2} />
                  </View>
                </View>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex-row items-center">
              <Bell size={20} color={iconColor} strokeWidth={2} />
              <Text className="ml-2 text-lg font-semibold">Notification Preferences</Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <View className="space-y-4">
              {/* Push Notifications */}
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-base font-medium text-foreground">Push Notifications</Text>
                  <Text className="text-sm text-muted-foreground mt-1">
                    Receive notifications for important updates
                  </Text>
                </View>
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                  trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                  thumbColor={notificationsEnabled ? '#FFFFFF' : '#9CA3AF'}
                />
              </View>

              {/* Location Services */}
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-base font-medium text-foreground">Location Services</Text>
                  <Text className="text-sm text-muted-foreground mt-1">
                    Share your location for incident reporting
                  </Text>
                </View>
                <Switch
                  value={locationEnabled}
                  onValueChange={setLocationEnabled}
                  trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                  thumbColor={locationEnabled ? '#FFFFFF' : '#9CA3AF'}
                />
              </View>

              {/* Emergency Alerts */}
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-base font-medium text-foreground">Emergency Alerts</Text>
                  <Text className="text-sm text-muted-foreground mt-1">
                    Receive critical safety notifications
                  </Text>
                </View>
                <Switch
                  value={emergencyAlerts}
                  onValueChange={setEmergencyAlerts}
                  trackColor={{ false: '#E5E7EB', true: '#EF4444' }}
                  thumbColor={emergencyAlerts ? '#FFFFFF' : '#9CA3AF'}
                />
              </View>
            </View>
          </CardContent>
        </Card>

        {/* App Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex-row items-center">
              <Settings size={20} color={iconColor} strokeWidth={2} />
              <Text className="ml-2 text-lg font-semibold">App Settings</Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <View className="space-y-3">
              {/* Privacy & Security */}
              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center flex-1">
                  <Shield size={18} color={iconColor} strokeWidth={2} />
                  <View className="ml-3">
                    <Text className="text-base font-medium text-foreground">Privacy & Security</Text>
                    <Text className="text-sm text-muted-foreground mt-1">
                      Manage your data and security settings
                    </Text>
                  </View>
                </View>
                <ChevronRight size={16} color={iconColor} strokeWidth={2} />
              </TouchableOpacity>

              {/* Help & Support */}
              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center flex-1">
                  <Text className="text-base font-medium text-foreground ml-6">Help & Support</Text>
                </View>
                <ChevronRight size={16} color={iconColor} strokeWidth={2} />
              </TouchableOpacity>

              {/* About */}
              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center flex-1">
                  <Text className="text-base font-medium text-foreground ml-6">About UrbanWatch</Text>
                </View>
                <ChevronRight size={16} color={iconColor} strokeWidth={2} />
              </TouchableOpacity>
            </View>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <View className="space-y-3 mb-8">
          <Button className="w-full bg-blue-600 active:bg-blue-700">
            <Text className="text-white font-semibold">Save Changes</Text>
          </Button>

          <Button variant="outline" className="w-full">
            <Text className="text-foreground font-semibold">Sign Out</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}