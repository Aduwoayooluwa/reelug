// types.ts
export interface Participant {
  name?: string;
  email?: string;
}

export interface Resource {
  name?: string;
  email?: string;
}

export interface When {
  time?: number;
}

export interface MeetingFormData {
  title?: string;
  status?: "confirmed" | "tentative" | "cancelled";
  busy?: boolean;
  participants?: Participant[];
  resources?: Resource[];
  description?: string;
  when?: number;
  location?: string;
  recurrence?: string[];
}
