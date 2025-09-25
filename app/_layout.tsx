import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { UserIcon, MapIcon, ShieldAlertIcon } from 'lucide-react-native';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

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
          },
          headerTintColor: NAV_THEME[colorScheme ?? 'light'].colors.text,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '600',
          },
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

