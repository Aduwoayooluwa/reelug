export interface Email {
  email: string;
  type: string;
}

export interface IMAddress {
  type: string;
  im_address: string;
}

export interface PhoneNumber {
  number: string;
  type: string;
}

export interface PhysicalAddress {
  type: string;
  street_address: string;
  postal_code: number;
  state: string;
  country: string;
  city: string;
}

export interface WebPage {
  type: string;
  url: string;
}

export interface Contact {
  birthday?: string;
  company_name?: string;
  emails: Email[];
  given_name: string;
  surname?: string;
  middle_name?: string;
  job_title?: string;
  manager_name?: string;
  nickname?: string;
  notes?: string;
  office_location?: string;
  phone_numbers?: PhoneNumber[];
  physical_addresses?: PhysicalAddress[];
  im_addresses?: IMAddress[];
  web_pages?: WebPage[];
  source?: string;
  suffix?: string;
  groups?: { id: string }[];
}
