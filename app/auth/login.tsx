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
import { Mail, Lock, Eye, EyeOff } from 'lucide-react-native';

import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const handleLogin = async () => {
        // Basic validation
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (!email.includes('@')) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        // Simulate login process
        try {
            // TODO: Replace with actual API call
            console.log('Login attempt with:', { email, password });

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulate successful login - create mock user data
            const userData = {
                id: '1',
                name: email.split('@')[0], // Use email prefix as name
                email: email,
            };

            login(userData);

            Alert.alert('Success', 'Login successful!', [
                {
                    text: 'OK',
                    onPress: () => {
                        // Navigate to main app
                        router.replace('/(tabs)');
                    },
                },
            ]);
        } catch (error) {
            Alert.alert('Error', 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
                    <View className="flex-1 justify-center py-8">
                        {/* Logo/Header Section */}
                        <View className="items-center mb-8">
                            <View className="w-20 h-20 bg-primary rounded-full items-center justify-center mb-4">
                                <Text className="text-3xl font-bold text-primary-foreground">Logo</Text>
                            </View>
                            <Text className="text-3xl font-bold text-foreground mb-2">
                                Welcome Back
                            </Text>
                            <Text className="text-muted-foreground text-center">
                                Sign in to your UrbanWatch account
                            </Text>
                        </View>

                        {/* Login Form */}
                        <View className="flex flex-col gap-4 mb-6">
                            {/* Email Input */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Email Address
                                </Text>
                                <View className="relative">
                                    <Input
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

                            {/* Password Input */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Password
                                </Text>
                                <View className="relative">
                                    <Input
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                        className="pl-12 pr-12"
                                    />
                                    <View className="absolute left-3 top-2.5">
                                        <Lock size={20} className="text-muted-foreground" />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2.5"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} className="text-muted-foreground" />
                                        ) : (
                                            <Eye size={20} className="text-muted-foreground" />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* Forgot Password Link */}
                        <View className="items-end mb-4">
                            <TouchableOpacity onPress={() => router.push('/auth/forgot-password' as any)}>
                                <Text className="text-primary text-sm font-medium">
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Login Button */}
                        <Button
                            onPress={handleLogin}
                            disabled={isLoading}
                            className="mb-6"
                        >
                            <Text className="text-primary-foreground font-semibold">
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </Text>
                        </Button>

                        {/* Sign Up Link */}
                        <View className="flex-row justify-center items-center">
                            <Text className="text-muted-foreground">
                                Don't have an account?{' '}
                            </Text>
                            <TouchableOpacity onPress={() => router.push('/auth/register' as any)}>
                                <Text className="text-primary font-semibold">
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}