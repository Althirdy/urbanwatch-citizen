import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Text, TouchableOpacity, View, Alert, PermissionsAndroid, Platform } from 'react-native';
import { useNavigation } from 'expo-router';
import { markers, MarkerData } from '../heatmap/heatmap.data';

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

  // Function to get marker color based on type and severity
  const getMarkerColor = (marker: MarkerData): string => {
    switch (marker.type) {
      case 'crime':
        return marker.severity === 'high' ? '#DC2626' : '#EF4444'; // Red
      case 'emergency':
        return marker.severity === 'high' ? '#B91C1C' : '#DC2626'; // Dark red
      case 'safety':
        return marker.severity === 'high' ? '#D97706' : '#F59E0B'; // Orange/Amber
      case 'incident':
        return marker.severity === 'high' ? '#7C3AED' : '#8B5CF6'; // Purple
      case 'report':
        return marker.severity === 'high' ? '#059669' : '#10B981'; // Green
      default:
        return '#6B7280'; // Gray
    }
  };

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
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            pinColor={getMarkerColor(marker)}
          />
        ))}
      </MapView>
    </View>
  );
}

