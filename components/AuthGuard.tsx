import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Redirect to auth screen if not authenticated
      router.replace('/auth/login' as any);
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <Text className="text-foreground">Loading...</Text>
      </View>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
};