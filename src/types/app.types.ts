export type CalendarData = {
  grant_id?: string;
  description?: string | null;
  id?: string;
  is_primary?: boolean;
  name?: string;
  object?: "calendar";
  read_only?: boolean;
  timezone?: string;
  hex_color?: string;
  is_owned_by_user?: boolean;
};
export type EmailData = {
  email_id?: string;
  subject?: string;
  sender?: string;
  recipient?: string;
  body?: string;
  timestamp?: Date;
  read?: boolean;
  attachments?: string[];
  date?: Date | undefined; 
  folders?: string[] | undefined;
  starred?: boolean;
  unread?: boolean;
};

