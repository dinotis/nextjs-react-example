export interface IMeeting {
  id?: string;

  title?: string;
  slug?: string;

  startDate?: Date;
  endDate?: Date;

  price?: number;
  limit?: number;

  calendarId?: string;
  isPublic?: boolean;

  hasGroupSelected?: boolean;
  totalPaid?: number;

  startedAt?: Date;
  endedAt?: Date;

  totalMinuteUsage?: number;

  isPublish?: boolean;
  momLink?: string;
  mainPhoto?: string;
  description?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
