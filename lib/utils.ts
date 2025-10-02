import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ConcernCategory =
  | 'Flood'
  | 'Garbage'
  | 'Traffic Accident'
  | 'Fire'
  | 'Crime'
  | 'Other';

export interface ConcernItem {
  id: string;
  title: string;
  description: string;
  category: ConcernCategory;
  imageUri?: string;
  location?: string;
  date: string;
  status: 'Acknowledged' | 'Responding' | 'Resolved' | 'Pending';
  timeline?: ConcernEvent[];
}

export interface ConcernEvent {
  type: 'Acknowledged' | 'Responding' | 'Resolved';
  at: string; // ISO or formatted string
  by?: string;
  notes?: string;
}
