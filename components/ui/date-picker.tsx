import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Calendar } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  value: string;
  onDateChange: (date: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onDateChange,
  placeholder = 'Select date',
  label,
  required = false,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => {
    if (value) {
      return new Date(value);
    }
    const defaultDate = new Date();
    defaultDate.setFullYear(defaultDate.getFullYear() - 18); // Default to 18 years ago
    return defaultDate;
  });

  const handleDateChange = (event: any, date?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    
    if (date) {
      setSelectedDate(date);
      const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      onDateChange(formattedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return placeholder;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <View>
      {label && (
        <Text className="text-sm font-medium text-foreground mb-2">
          {label} {required && <Text className="text-red-500">*</Text>}
        </Text>
      )}
      
      <TouchableOpacity
        onPress={showDatePickerModal}
        className="w-full"
      >
        <View className="flex-row items-center justify-between border border-border rounded-md px-3 py-2.5 bg-background">
          <Text className={`text-base ${value ? 'text-foreground' : 'text-muted-foreground'}`}>
            {formatDateDisplay(value)}
          </Text>
          <Calendar size={20} className="text-muted-foreground" />
        </View>
      </TouchableOpacity>

      {/* Native DateTimePicker */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          maximumDate={new Date()}
          minimumDate={new Date(1900, 0, 1)}
        />
      )}

      {/* iOS Done button overlay */}
      {showDatePicker && Platform.OS === 'ios' && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 justify-end">
          <View className="bg-background p-4">
            <TouchableOpacity onPress={hideDatePicker} className="self-end mb-2">
              <Text className="text-primary font-semibold text-lg">Done</Text>
            </TouchableOpacity>
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="spinner"
              onChange={handleDateChange}
              maximumDate={new Date()}
              minimumDate={new Date(1900, 0, 1)}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default DatePicker;