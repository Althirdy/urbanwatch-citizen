export interface PublicReport {
  id: string;
  title: string;
  category: 'Road Accident' | 'Flood' | 'Crime' | 'Fire' | 'Emergency' | 'Infrastructure';
  location: string;
  timeAgo: string;
  description: string;
  reportedBy: string;
  views: number;
  image?: string;
  fullDescription?: string;
  timestamp?: string;
  status?: 'Active' | 'Resolved' | 'Under Investigation';
  tags?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
