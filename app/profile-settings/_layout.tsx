import { Stack } from 'expo-router'
import React from 'react'

const ProfileSettingsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'card'
      }}
    >
      <Stack.Screen 
        name="profile" 
        options={{ 
          title: 'Profile Settings',
          headerBackTitle: 'Back'
        }} 
      />
    </Stack>
  )
}

export default ProfileSettingsLayout