export interface MarkerData {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  type: 'safety' | 'crime' | 'incident' | 'emergency' | 'report';
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

// Dummy markers scattered within Brgy 176A, Bagong Silang, Caloocan radius
// Center: 14.7752438, 121.0448983 - More spread out for better visibility
export const markers: MarkerData[] = [
  {
    id: '1',
    latitude: 14.7780120,
    longitude: 121.0475320,
    title: 'Street Light Outage',
    description: 'Broken street light on main road',
    type: 'safety',
    severity: 'medium',
    timestamp: '2024-09-27T08:30:00Z'
  },
  {
    id: '2',
    latitude: 14.7725890,
    longitude: 121.0422150,
    title: 'Theft Report',
    description: 'Motorcycle theft reported in this area',
    type: 'crime',
    severity: 'high',
    timestamp: '2024-09-26T22:15:00Z'
  },
  {
    id: '3',
    latitude: 14.7738340,
    longitude: 121.0470780,
    title: 'Pothole',
    description: 'Large pothole causing traffic issues',
    type: 'incident',
    severity: 'medium',
    timestamp: '2024-09-27T14:20:00Z'
  },
  {
    id: '4',
    latitude: 14.7790120,
    longitude: 121.0430890,
    title: 'Suspicious Activity',
    description: 'Suspicious individuals loitering near school',
    type: 'safety',
    severity: 'medium',
    timestamp: '2024-09-27T16:45:00Z'
  },
  {
    id: '5',
    latitude: 14.7722600,
    longitude: 121.0461200,
    title: 'Fire Hazard',
    description: 'Exposed electrical wires near residential area',
    type: 'emergency',
    severity: 'high',
    timestamp: '2024-09-27T10:10:00Z'
  },
  {
    id: '6',
    latitude: 14.7785450,
    longitude: 121.0423670,
    title: 'Drug Activity',
    description: 'Suspected drug dealing in alley',
    type: 'crime',
    severity: 'high',
    timestamp: '2024-09-26T20:30:00Z'
  },
  {
    id: '7',
    latitude: 14.7728920,
    longitude: 121.0476780,
    title: 'Noise Complaint',
    description: 'Loud music disturbing residents',
    type: 'incident',
    severity: 'low',
    timestamp: '2024-09-27T23:00:00Z'
  },
  {
    id: '8',
    latitude: 14.7776780,
    longitude: 121.0428340,
    title: 'Vandalism',
    description: 'Graffiti on public property',
    type: 'crime',
    severity: 'low',
    timestamp: '2024-09-27T07:15:00Z'
  },
  {
    id: '9',
    latitude: 14.7723200,
    longitude: 121.0427890,
    title: 'Poor Lighting',
    description: 'Dark area needs additional lighting',
    type: 'safety',
    severity: 'medium',
    timestamp: '2024-09-27T19:30:00Z'
  },
  {
    id: '10',
    latitude: 14.7781340,
    longitude: 121.0470120,
    title: 'Traffic Accident',
    description: 'Minor collision at intersection',
    type: 'incident',
    severity: 'medium',
    timestamp: '2024-09-27T12:45:00Z'
  },
  {
    id: '11',
    latitude: 14.7737560,
    longitude: 121.0424320,
    title: 'Flooding Risk',
    description: 'Clogged drainage causing water accumulation',
    type: 'emergency',
    severity: 'medium',
    timestamp: '2024-09-27T06:00:00Z'
  },
  {
    id: '12',
    latitude: 14.7779120,
    longitude: 121.0473210,
    title: 'Stray Animals',
    description: 'Pack of stray dogs in residential area',
    type: 'safety',
    severity: 'low',
    timestamp: '2024-09-27T15:20:00Z'
  },
  {
    id: '13',
    latitude: 14.7745670,
    longitude: 121.0435450,
    title: 'Broken Sidewalk',
    description: 'Cracked pavement creating walking hazard',
    type: 'safety',
    severity: 'low',
    timestamp: '2024-09-27T11:00:00Z'
  },
  {
    id: '14',
    latitude: 14.7765890,
    longitude: 121.0462340,
    title: 'Illegal Dumping',
    description: 'Garbage dumped in vacant lot',
    type: 'incident',
    severity: 'medium',
    timestamp: '2024-09-26T18:30:00Z'
  },
  {
    id: '15',
    latitude: 14.7732100,
    longitude: 121.0455670,
    title: 'Missing Manhole Cover',
    description: 'Open manhole poses danger to pedestrians',
    type: 'emergency',
    severity: 'high',
    timestamp: '2024-09-27T09:45:00Z'
  }
];