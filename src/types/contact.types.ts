export interface Email {
  email: string;
}

export interface Contact {
  id: string;
  birthday?: string;
  company_name?: string;
  emails: Email[];
  given_name?: string;
  grant_id: string;
  groups?: string[];
  job_title?: string;
  manager_name?: string;
  middle_name?: string;
  nickname?: string;
  notes?: string;
  office_location?: string;
  phone_numbers?: string[];
  physical_addresses?: string[];
  picture_url?: string;
  source?: string;
  suffix?: string;
  surname?: string;
  web_pages?: string[];
}
