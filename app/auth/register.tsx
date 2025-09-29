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
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react-native';

import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Select } from '@/components/ui/select';
import { provinceOptions, cityOptions, barangayOptions } from '@/lib/address-options';
import { validateRegistrationForm, type RegistrationFormData } from '@/lib/validation';

export default function RegisterScreen() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        birthdate: '',
        phoneNumber: '',
        address: '',
        barangay: '',
        city: '',
        province: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };


    const validateForm = () => {
        const validationResult = validateRegistrationForm(formData as RegistrationFormData);
        
        if (!validationResult.isValid) {
            Alert.alert('Error', validationResult.errorMessage || 'Please check your form data');
            return false;
        }

        return true;
    };

    const handleRegister = async () => {
        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // TODO: Replace with actual API call
            console.log('Register attempt with:', formData);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate successful registration
            Alert.alert(
                'Success',
                'Account created successfully! Please sign in.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // Navigate to login screen
                            router.replace('/auth/login' as any);
                        },
                    },
                ]
            );
        } catch (error) {
            Alert.alert('Error', 'Registration failed. Please try again.');
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
                        {/* Header Section */}
                        <View className="items-center mb-8">
                            <View className="w-20 h-20 bg-primary rounded-full items-center justify-center mb-4">
                                <Text className="text-3xl font-bold text-primary-foreground">UW</Text>
                            </View>
                            <Text className="text-3xl font-bold text-foreground mb-2">
                                Create Account
                            </Text>
                            <Text className="text-muted-foreground text-center">
                                Join UrbanWatch to report and track community issues
                            </Text>
                        </View>

                        {/* Registration Form */}
                        <View className="flex flex-col gap-3 mb-6">
                            {/* Personal Information Section */}
                            <Text className="text-lg font-semibold text-foreground mb-2 mt-4">
                                Personal Information
                            </Text>

                            {/* First Name */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    First Name *
                                </Text>
                                <View className="relative">
                                    <Input
                                        value={formData.firstName}
                                        onChangeText={(value) => handleInputChange('firstName', value)}
                                        autoCapitalize="words"
                                        className="pl-12"
                                    />
                                    <View className="absolute left-3 top-2.5">
                                        <User size={20} className="text-muted-foreground" />
                                    </View>
                                </View>
                            </View>

                            {/* Middle Name */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Middle Name
                                </Text>
                                <Input
                                    value={formData.middleName}
                                    onChangeText={(value) => handleInputChange('middleName', value)}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* Last Name */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Last Name *
                                </Text>
                                <Input
                                    value={formData.lastName}
                                    onChangeText={(value) => handleInputChange('lastName', value)}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* Suffix */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Suffix
                                </Text>
                                <Input
                                    value={formData.suffix}
                                    onChangeText={(value) => handleInputChange('suffix', value)}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* Birthdate */}
                            <DatePicker
                                label="Birthdate"
                                value={formData.birthdate}
                                onDateChange={(date) => handleInputChange('birthdate', date)}
                                placeholder="Select your birthdate"
                            />

                            {/* Contact Information Section */}
                            <Text className="text-lg font-semibold text-foreground mb-2 mt-6">
                                Contact Information
                            </Text>

                            {/* Email Input */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Email Address *
                                </Text>
                                <View className="relative">
                                    <Input
                                        value={formData.email}
                                        onChangeText={(value) => handleInputChange('email', value)}
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

                            {/* Phone Number */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Phone Number *
                                </Text>
                                <Input
                                    value={formData.phoneNumber}
                                    onChangeText={(value) => handleInputChange('phoneNumber', value)}
                                    keyboardType="phone-pad"
                                />
                            </View>

                            {/* Address Information Section */}
                            <Text className="text-lg font-semibold text-foreground mb-2 mt-6">
                                Address Information
                            </Text>

                            {/* Address */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Street Address *
                                </Text>
                                <Input
                                    placeholder="e.g Ph8 B Pkg 5 Blk 20 Lot 40..."
                                    value={formData.address}
                                    onChangeText={(value) => handleInputChange('address', value)}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* Barangay */}
                            <Select
                                label="Barangay"
                                required={true}
                                value={formData.barangay}
                                onValueChange={(value) => handleInputChange('barangay', value)}
                                options={barangayOptions}
                                placeholder="Select your barangay"
                            />

                            {/* City */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    ZipCode
                                </Text>
                                <Input
                                    placeholder=""
                                    // value={formData.city}
                                    // onChangeText={(value) => handleInputChange('city', value)}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* City */}
                            <Select
                                label="City"
                                required={true}
                                value={formData.city}
                                onValueChange={(value) => handleInputChange('city', value)}
                                options={cityOptions}
                                placeholder="Select your city"
                            />

                            {/* Province */}
                            <Select
                                label="Province"
                                required={true}
                                value={formData.province}
                                onValueChange={(value) => handleInputChange('province', value)}
                                options={provinceOptions}
                                placeholder="Select your province"
                            />

                            {/* Account Security Section */}
                            <Text className="text-lg font-semibold text-foreground mb-2 mt-6">
                                Account Security
                            </Text>

                            {/* Password Input */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Password *
                                </Text>
                                <View className="relative">
                                    <Input
                                        value={formData.password}
                                        onChangeText={(value) => handleInputChange('password', value)}
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

                            {/* Confirm Password Input */}
                            <View>
                                <Text className="text-sm font-medium text-foreground mb-2">
                                    Confirm Password *
                                </Text>
                                <View className="relative">
                                    <Input
                                        value={formData.confirmPassword}
                                        onChangeText={(value) => handleInputChange('confirmPassword', value)}
                                        secureTextEntry={!showConfirmPassword}
                                        className="pl-12 pr-12"
                                    />
                                    <View className="absolute left-3 top-2.5">
                                        <Lock size={20} className="text-muted-foreground" />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-2.5"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={20} className="text-muted-foreground" />
                                        ) : (
                                            <Eye size={20} className="text-muted-foreground" />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* Terms and Conditions */}
                        <View className="mb-6">
                            <Text className="text-sm text-muted-foreground text-center">
                                By creating an account, you agree to our{' '}
                                <Text className="text-primary font-medium">Terms of Service</Text>
                                {' '}and{' '}
                                <Text className="text-primary font-medium">Privacy Policy</Text>
                            </Text>
                        </View>

                        {/* Register Button */}
                        <Button
                            onPress={handleRegister}
                            disabled={isLoading}
                            className="mb-6"
                        >
                            <Text className="text-primary-foreground font-semibold">
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </Text>
                        </Button>

                        {/* Sign In Link */}
                        <View className="flex-row justify-center items-center">
                            <Text className="text-muted-foreground">
                                Already have an account?{' '}
                            </Text>
                            <TouchableOpacity onPress={() => router.push('/auth/login' as any)}>
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