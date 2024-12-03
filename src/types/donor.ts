export interface Donor {
  id: string;
  name: string;
  bloodGroup: BloodGroup;
  location: string;
  phone?: string;
  socialMedia?: string;
  lastDonation?: Date;
}

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';