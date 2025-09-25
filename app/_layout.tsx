import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { UserIcon, MapIcon, ShieldAlertIcon, Bell } from 'lucide-react-native';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/text';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function HeaderRight() {
  const { colorScheme } = useColorScheme();
  
  return (
    <View className="flex-row items-center space-x-3 gap-2 mr-4">
      {/* Notification Icon */}
      <TouchableOpacity className="p-2">
        <Bell 
          size={24} 
          color={colorScheme === 'dark' ? '#ffffff' : '#000000'} 
          strokeWidth={1.5}
        />
      </TouchableOpacity>

      {/* Avatar */}
      <TouchableOpacity className="w-8 h-8 bg-gray-300 rounded-full items-center justify-center">
        <Text className="text-sm font-medium text-gray-700">JB</Text>
      </TouchableOpacity>
    </View>
  );
}

function HeaderLeft() {
  return (
    <View className="flex-row items-center ml-4">
      {/* App Logo */}
      <View className="w-8 h-8 bg-blue-600 rounded-lg items-center justify-center mr-3">
        <View className="w-4 h-4 bg-white rounded-sm" />
      </View>
      <Text className="text-lg font-semibold">UrbanWatch</Text>
    </View>
  );
}

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: NAV_THEME[colorScheme ?? 'light'].colors.primary,
          tabBarInactiveTintColor: colorScheme === 'dark' ? '#9CA3AF' : '#6B7280',
          tabBarStyle: {
            backgroundColor: NAV_THEME[colorScheme ?? 'light'].colors.card,
            borderTopColor: colorScheme === 'dark' ? '#374151' : '#E5E7EB',
            borderTopWidth: 1,
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 16,
            height: 75,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 4,
            marginBottom: 2,
          },
          tabBarItemStyle: {
            paddingVertical: 4,
          },
          headerStyle: {
            backgroundColor: NAV_THEME[colorScheme ?? 'light'].colors.card,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: colorScheme === 'dark' ? '#374151' : '#E5E7EB',
            borderBottomWidth: 1,
          },
          headerTintColor: NAV_THEME[colorScheme ?? 'light'].colors.text,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '600',
          },
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
          headerTitle: '', // Remove the default title since we have custom header
        }}
        
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Citizen',
            tabBarIcon: ({ color, focused }) => (
              <UserIcon 
                size={focused ? 26 : 22} 
                color={color} 
                strokeWidth={focused ? 2.5 : 2}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="maps"
          options={{
            title: 'Maps',
            tabBarIcon: ({ color, focused }) => (
              <MapIcon 
                size={focused ? 26 : 22} 
                color={color}
                strokeWidth={focused ? 2.5 : 2}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="safety-news"
          options={{
            title: 'Safety News',
            tabBarIcon: ({ color, focused }) => (
              <ShieldAlertIcon 
                size={focused ? 26 : 22} 
                color={color}
                strokeWidth={focused ? 2.5 : 2}
              />
            ),
          }}
        />

      </Tabs>
      <PortalHost />
    </ThemeProvider>
  );
}

