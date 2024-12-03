import { writable } from 'svelte/store';
import type { Donor } from '../types/donor';

export const donors = writable<Donor[]>([]);

// Mock data for testing
const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'John Doe',
    bloodGroup: 'A+',
    location: 'New York',
    phone: '123-456-7890',
    socialMedia: 'https://twitter.com/johndoe',
    lastDonation: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Jane Smith',
    bloodGroup: 'O-',
    location: 'Los Angeles',
    socialMedia: 'https://linkedin.com/janesmith',
    lastDonation: new Date('2023-12-20')
  }
];

// Initialize store with mock data
donors.set(mockDonors);