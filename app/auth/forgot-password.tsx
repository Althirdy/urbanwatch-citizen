import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { Mail, ArrowLeft } from 'lucide-react-native';

import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Replace with actual API call
      console.log('Password reset request for:', email);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful request
      setIsEmailSent(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.back();
  };

  if (isEmailSent) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 justify-center px-6">
          {/* Success Message */}
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-green-500 rounded-full items-center justify-center mb-4">
              <Mail size={32} className="text-white" />
            </View>
            <Text className="text-2xl font-bold text-foreground mb-4 text-center">
              Check Your Email
            </Text>
            <Text className="text-muted-foreground text-center mb-2">
              We've sent a password reset link to:
            </Text>
            <Text className="text-foreground font-semibold text-center mb-4">
              {email}
            </Text>
            <Text className="text-muted-foreground text-center">
              Please check your email and follow the instructions to reset your password.
            </Text>
          </View>

          {/* Actions */}
          <View className="space-y-4">
            <Button onPress={handleForgotPassword} variant="outline">
              <Text className="text-foreground font-semibold">
                Resend Email
              </Text>
            </Button>
            
            <Button onPress={handleBackToLogin}>
              <Text className="text-primary-foreground font-semibold">
                Back to Sign In
              </Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
          {/* Header with Back Button */}
          <View className="flex-row items-center pt-4 mb-8">
            <TouchableOpacity onPress={handleBackToLogin} className="mr-4">
              <ArrowLeft size={24} className="text-foreground" />
            </TouchableOpacity>
            <Text className="text-xl font-semibold text-foreground">
              Forgot Password
            </Text>
          </View>

          <View className="flex-1 justify-center">
            {/* Header Section */}
            <View className="items-center mb-8">
              <View className="w-20 h-20 bg-primary/10 rounded-full items-center justify-center mb-4">
                <Mail size={32} className="text-primary" />
              </View>
              <Text className="text-2xl font-bold text-foreground mb-2 text-center">
                Reset Your Password
              </Text>
              <Text className="text-muted-foreground text-center">
                Enter your email address and we'll send you a link to reset your password
              </Text>
            </View>

            {/* Email Input Form */}
            <View className="space-y-6 mb-8">
              <View>
                <Text className="text-sm font-medium text-foreground mb-2">
                  Email Address
                </Text>
                <View className="relative">
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    className="pl-12"
                  />
                  <View className="absolute left-3 top-2.5">
                    <Mail size={20} className="text-muted-foreground" />
                  </View>
                </View>
              </View>

              {/* Reset Button */}
              <Button
                onPress={handleForgotPassword}
                disabled={isLoading}
              >
                <Text className="text-primary-foreground font-semibold">
                  {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
                </Text>
              </Button>
            </View>

            {/* Back to Sign In Link */}
            <View className="flex-row justify-center items-center">
              <Text className="text-muted-foreground">
                Remember your password?{' '}
              </Text>
              <TouchableOpacity onPress={handleBackToLogin}>
                <Text className="text-primary font-semibold">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}