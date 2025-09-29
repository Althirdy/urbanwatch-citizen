// Address dropdown options for Caloocan City registration

export const provinceOptions = [
  { value: 'metro-manila', label: 'Metro Manila' }
];

export const cityOptions = [
  { value: 'caloocan-city', label: 'Caloocan City' }
];

export const barangayOptions = [
  { value: 'brgy-176-a', label: 'Barangay 176-A' },
  { value: 'brgy-176-b', label: 'Barangay 176-B' },
  { value: 'brgy-176-c', label: 'Barangay 176-C' },
  { value: 'brgy-176-d', label: 'Barangay 176-D' },
  { value: 'brgy-176-e', label: 'Barangay 176-E' },
  { value: 'brgy-176-f', label: 'Barangay 176-F' },
];

// Address option types for TypeScript
export interface AddressOption {
  value: string;
  label: string;
}