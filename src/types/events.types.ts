interface ConferencingDetails {
  meeting_code: string;
  url: string;
}

interface Conferencing {
  details: ConferencingDetails;
  provider: string;
}

interface Creator {
  email: string;
  name: string;
}

interface Organizer {
  email: string;
  name: string;
}

interface Participant {
  email: string;
  status: string;
}

interface Reminders {
  overrides: null | string[];
  use_default: boolean;
}

interface When {
  end_time: number;
  end_timezone: string;
  object: string;
  start_time: number;
  start_timezone: string;
}

export interface EventData {
  busy: boolean;
  calendar_id: string;
  conferencing: Conferencing;
  created_at: number;
  creator: Creator;
  description: string | null;
  grant_id: string;
  hide_participants: boolean;
  html_link: string;
  ical_uid: string;
  id: string;
  object: string;
  organizer: Organizer;
  participants: Participant[];
  read_only: boolean;
  reminders: Reminders;
  status: string;
  title: string;
  updated_at: number;
  when: When;
}
