import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, TouchableOpacity, View, Alert, PermissionsAndroid, Platform } from 'react-native';
import { useNavigation } from 'expo-router';

const INITIAL_REGION = {
  latitude: 14.7752438,
  longitude: 121.0448983,
  latitudeDelta: 1,
  longitudeDelta: 1,
}

export default function App() {
  const mapRef = React.useRef<MapView | null>(null);
  const navigation = useNavigation()
  const [locationPermission, setLocationPermission] = React.useState<boolean>(false);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={focusMap} style={{ marginRight: 20 }}>
          <View>
            <Text>Focus</Text>
          </View>
        </TouchableOpacity >
      )
    })
  }, [])

  React.useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs location permission to show your position on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission(true);
        } else {
          Alert.alert(
            'Location Permission Required',
            'Please enable location permissions to see your position on the map.',
            [{ text: 'OK' }]
          );
        }
      } else {
        // For iOS, permissions are handled in Info.plist
        setLocationPermission(true);
      }
    } catch (error) {
      console.log('Error requesting location permission:', error);
    }
  };


  const focusMap = () => {
    const Brgy176A = {
      latitude: 14.7752438,
      longitude: 121.0448983,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    }
    mapRef.current?.animateToRegion(Brgy176A, 2000);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{ ...StyleSheet.absoluteFillObject }}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation={locationPermission}
        showsMyLocationButton={locationPermission}
        showsCompass={true}
      />
    </View>
  );
}

