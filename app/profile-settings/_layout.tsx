import { Stack } from 'expo-router'
import React from 'react'

const ProfileSettingsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        presentation: 'card',
        headerTitle: 'profile-settings'
      }}
    >
      <Stack.Screen name="profile" />
    </Stack>
  )
}

export default ProfileSettingsLayout