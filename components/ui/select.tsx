import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Picker } from '@react-native-picker/picker';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = 'Select an option',
  label,
  required = false,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  const handleValueChange = (itemValue: string) => {
    onValueChange(itemValue);
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
  };

  const openPicker = () => {
    setShowPicker(true);
  };

  const closePicker = () => {
    setShowPicker(false);
  };

  return (
    <View>
      {label && (
        <Text className="text-sm font-medium text-foreground mb-2">
          {label} {required && <Text className="text-red-500">*</Text>}
        </Text>
      )}
      
      {Platform.OS === 'ios' ? (
        // iOS Implementation with Modal
        <>
          <TouchableOpacity onPress={openPicker} className="w-full">
            <View className="flex-row items-center justify-between border border-border rounded-md px-3 py-2.5 bg-background">
              <Text className={`text-base ${value ? 'text-foreground' : 'text-muted-foreground'}`}>
                {selectedOption ? selectedOption.label : placeholder}
              </Text>
              <ChevronDown size={20} className="text-muted-foreground" />
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType="slide"
            visible={showPicker}
            onRequestClose={closePicker}
          >
            <View className="flex-1 justify-end bg-black/50">
              <View className="bg-background rounded-t-3xl">
                <View className="flex-row justify-between items-center p-4 border-b border-border">
                  <Text className="text-lg font-semibold text-foreground">
                    {label || 'Select Option'}
                  </Text>
                  <TouchableOpacity onPress={closePicker}>
                    <Text className="text-primary font-semibold">Done</Text>
                  </TouchableOpacity>
                </View>
                
                <Picker
                  selectedValue={value}
                  onValueChange={handleValueChange}
                  style={{ height: 200 }}
                >
                  <Picker.Item label={placeholder} value="" enabled={false} />
                  {options.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        // Android Implementation - Direct Picker
        <View className="border border-border rounded-md bg-background">
          <Picker
            selectedValue={value}
            onValueChange={handleValueChange}
            style={{ height: 50 }}
            dropdownIconColor="#6b7280"
          >
            <Picker.Item label={placeholder} value="" enabled={false} />
            {options.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default Select;