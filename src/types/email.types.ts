interface EmailAddress {
  email: string;
  name: string;
}

interface TrackingOptions {
  opens: boolean;
  links: boolean;
  thread_replies: boolean;
  label: string;
}

export interface EmailFormData {
  subject: string;
  to: EmailAddress[];
  cc: EmailAddress[];
  bcc: EmailAddress[];
  reply_to: EmailAddress[];
  body: string;
  tracking_options: TrackingOptions;
}
