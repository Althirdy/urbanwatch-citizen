import { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { addConcern } from '@/lib/concerns';
import { ConcernCategory } from '@/lib/utils';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { Camera, ImagePlus } from 'lucide-react-native';

const categories: ConcernCategory[] = ['Flood', 'Garbage', 'Traffic Accident', 'Fire', 'Crime', 'Other'];

export default function ManualReportScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ConcernCategory>('Other');
  const [imageUri, setImageUri] = useState<string | undefined>();

  async function pickImage() {
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
    if (!res.canceled) {
      setImageUri(res.assets[0].uri);
    }
  }

  async function takePhoto() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera permission is needed to take a photo.');
      return;
    }
    const res = await ImagePicker.launchCameraAsync({ quality: 0.7 });
    if (!res.canceled) {
      setImageUri(res.assets[0].uri);
    }
  }

  function submit() {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Missing info', 'Please add a title and description.');
      return;
    }
    addConcern({ title, description, category, imageUri });
    router.replace('/concerns' as any);
  }

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <View className="rounded-2xl border border-border bg-card p-4 gap-3">
          <View className="gap-1">
            <Text className="text-[13px] text-muted-foreground">Title</Text>
            <Input value={title} onChangeText={setTitle} placeholder="Brief incident title" />
          </View>

          <View className="gap-1">
            <Text className="text-[13px] text-muted-foreground">Description</Text>
            <Textarea value={description} onChangeText={setDescription} placeholder="Describe what happened" className="min-h-24" />
          </View>

          <View className="gap-2">
            <Text className="text-sm font-medium">Category</Text>
            <View className="flex-row flex-wrap gap-2">
              {categories.map((c) => (
                <TouchableOpacity
                  key={c}
                  onPress={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full border ${category === c ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-border'}`}
                >
                  <Text className={`${category === c ? 'text-white' : 'text-foreground'} text-xs font-medium`}>{c}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-sm font-medium">Photo</Text>
            {imageUri ? (
              <Image source={{ uri: imageUri }} className="w-full h-40 rounded-xl" />
            ) : (
              <View className="w-full h-36 rounded-xl border border-dashed border-border bg-muted/40 items-center justify-center">
                <View className="items-center gap-1.5">
                  <ImagePlus size={20} color="#6B7280" />
                  <Text className="text-xs text-muted-foreground">No image selected</Text>
                </View>
              </View>
            )}
            <View className="flex-row gap-2">
              <Button variant="secondary" onPress={pickImage}>
                <View className="flex-row items-center gap-1.5">
                  <ImagePlus size={16} color="#111827" />
                  <Text>Choose from gallery</Text>
                </View>
              </Button>
              <Button onPress={takePhoto}>
                <View className="flex-row items-center gap-1.5">
                  <Camera size={16} color="#ffffff" />
                  <Text className="text-white">Take photo</Text>
                </View>
              </Button>
            </View>
          </View>
        </View>

        <Button className="mt-3" onPress={submit}>
          <Text className="text-white">Submit report</Text>
        </Button>
      </View>
    </ScrollView>
  );
}


