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
        <Card className="mb-4">
          <CardContent className="p-5">
            <View className="items-center">
              <View className="relative mb-3">
                <View className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full items-center justify-center">
                  <Text className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {userInfo.firstName[0]}{userInfo.lastName[0]}
                  </Text>
                </View>
                <TouchableOpacity className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full items-center justify-center shadow-lg">
                  <Camera size={16} color="white" strokeWidth={2} />
                </TouchableOpacity>
              </View>
              <Text className="text-lg font-semibold text-foreground">
                {userInfo.firstName} {userInfo.lastName}
              </Text>
              <View className="flex-row items-center mt-1">
                <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <Text className="text-xs text-green-600 dark:text-green-400">Active Status</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Details & Settings - single compact card */}
        <Card className="mb-4">
          <CardContent className="p-5 gap-4">
            {/* Personal Info */}
            <View>
              <View className="flex-row items-center mb-3">
                <User size={18} color={iconColor} />
                <Text className="ml-2 text-base font-semibold">Personal Information</Text>
              </View>
              <View className="gap-3">
                <View>
                  <Text className="text-sm text-muted-foreground mb-1">First Name</Text>
                  <Input value={userInfo.firstName} onChangeText={(t) => setUserInfo({ ...userInfo, firstName: t })} />
                </View>
                <View>
                  <Text className="text-sm text-muted-foreground mb-1">Last Name</Text>
                  <Input value={userInfo.lastName} onChangeText={(t) => setUserInfo({ ...userInfo, lastName: t })} />
                </View>
                <View>
                  <Text className="text-sm text-muted-foreground mb-1">Email</Text>
                  <View className="relative">
                    <Input value={userInfo.email} onChangeText={(t) => setUserInfo({ ...userInfo, email: t })} keyboardType="email-address" className="pl-10" />
                    <View className="absolute left-3 top-1/2 -translate-y-1/2"><Mail size={16} color={iconColor} /></View>
                  </View>
                </View>
                <View>
                  <Text className="text-sm text-muted-foreground mb-1">Phone Number</Text>
                  <View className="relative">
                    <Input value={userInfo.phone} onChangeText={(t) => setUserInfo({ ...userInfo, phone: t })} keyboardType="phone-pad" className="pl-10" />
                    <View className="absolute left-3 top-1/2 -translate-y-1/2"><Phone size={16} color={iconColor} /></View>
                  </View>
                </View>
                <View>
                  <Text className="text-sm text-muted-foreground mb-1">Address</Text>
                  <View className="relative">
                    <Textarea value={userInfo.address} onChangeText={(t) => setUserInfo({ ...userInfo, address: t })} numberOfLines={3} className="pl-10 h-20" />
                    <View className="absolute left-3 top-3"><MapPin size={16} color={iconColor} /></View>
                  </View>
                </View>
              </View>
            </View>

            {/* Preferences */}
            <View>
              <View className="flex-row items-center mb-3">
                <Bell size={18} color={iconColor} />
                <Text className="ml-2 text-base font-semibold">Preferences</Text>
              </View>
              <View className="gap-3">
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-base">Push Notifications</Text>
                    <Text className="text-xs text-muted-foreground">Important updates</Text>
                  </View>
                  <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
                </View>
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-base">Location Services</Text>
                    <Text className="text-xs text-muted-foreground">For incident reporting</Text>
                  </View>
                  <Switch value={locationEnabled} onValueChange={setLocationEnabled} />
                </View>
                <View className="flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-base">Emergency Alerts</Text>
                    <Text className="text-xs text-muted-foreground">Critical notifications</Text>
                  </View>
                  <Switch value={emergencyAlerts} onValueChange={setEmergencyAlerts} />
                </View>
              </View>
            </View>

            {/* App Links */}
            <View>
              <View className="flex-row items-center mb-3">
                <Settings size={18} color={iconColor} />
                <Text className="ml-2 text-base font-semibold">App</Text>
              </View>
              <View className="divide-y divide-border">
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <View className="flex-row items-center flex-1">
                    <Shield size={18} color={iconColor} />
                    <Text className="ml-3 text-base">Privacy & Security</Text>
                  </View>
                  <ChevronRight size={16} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <Text className="ml-9 text-base">Help & Support</Text>
                  <ChevronRight size={16} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <Text className="ml-9 text-base">About UrbanWatch</Text>
                  <ChevronRight size={16} color={iconColor} />
                </TouchableOpacity>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Actions */}
        <View className="gap-3 mb-8">
          <Button className="w-full bg-blue-600 active:bg-blue-700"><Text className="text-white font-semibold">Save Changes</Text></Button>
          <Button variant="outline" className="w-full"><Text className="text-foreground font-semibold">Sign Out</Text></Button>
        </View>
      </View>
    </ScrollView>
  );
}