export interface SessionData {
  id: number;
  title: string;
  activities: string[];
  homework?: string;
}

export interface PhaseData {
  id: number;
  name: string;
  description: string;
  sessions: SessionData[];
  color: string;
  icon?: string;
}