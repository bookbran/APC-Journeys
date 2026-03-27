export interface SessionData {
  id: number;
  title: string;
  activities: string[];
  homework: string;
  homeworkLabel?: string;
}

export interface PhaseData {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  lightColor: string;
  borderColor: string;
  icon: React.ReactNode;
  sessions: SessionData[];
  tag?: string;
}