import { FileText, Compass, Target, MessageSquare, Briefcase, UserCheck, Star, Users } from 'lucide-react';

export interface SessionData {
  id: number;
  title: string;
  activities: string[];
  homework?: string;
  icon: any;
}

export interface PhaseData {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
  borderColor: string;
  lightColor: string;
  sessions: SessionData[];
}

export const PHASES: PhaseData[] = [
  {
    id: 1,
    title: "Self-Discovery",
    subtitle: "Sessions 1–2",
    color: "bg-brand-navy",
    textColor: "text-brand-navy",
    borderColor: "border-brand-navy",
    lightColor: "bg-brand-navy/5",
    sessions: [
      {
        id: 1,
        title: "Review & Insight",
        icon: FileText,
        activities: [
          "Walk through resume & history",
          "Identify energy drains & gains",
          "Map patterns & core strengths",
          "Foundation for preferences model"
        ],
        homework: "Complete Motivated Skills Matrix & Gallup Strengths"
      },
      {
        id: 2,
        title: "Preferences Model",
        icon: Compass,
        activities: [
          "Debrief assessments",
          "Build Career Preferences Model (6–8 criteria)",
          "Connect strengths to directions",
          "Discuss model with a confidant"
        ],
        homework: "Refine model; Coach preps initial research"
      }
    ]
  },
  {
    id: 2,
    title: "Guided Mapping",
    subtitle: "Sessions 3–5",
    color: "bg-brand-purple",
    textColor: "text-brand-purple",
    borderColor: "border-brand-purple",
    lightColor: "bg-brand-purple/5",
    sessions: [
      {
        id: 3,
        title: "Industry Discovery",
        icon: Target,
        activities: [
          "Finalize preferences model",
          "Co-explore industries via AI & O*NET",
          "Review coach-researched listings",
          "Real-time energy check"
        ],
        homework: "Browse LinkedIn of 2–3 interesting companies"
      },
      {
        id: 4,
        title: "Targeting & LinkedIn",
        icon: Users,
        activities: [
          "Analyze target companies & profiles",
          "Finalize target organization list",
          "Coach-led LinkedIn 'About' draft",
          "Update Experience section"
        ],
        homework: "Post LinkedIn About; Meet Joanie for docs"
      },
      {
        id: 5,
        title: "Networking Launch",
        icon: MessageSquare,
        activities: [
          "Review Joanie's materials",
          "Draft outreach messages together",
          "Build networking target list",
          "Set application rhythm"
        ],
        homework: "Send drafted messages; Apply to 3–5 roles"
      }
    ]
  },
  {
    id: 3,
    title: "Search & Interview",
    subtitle: "Sessions 6–8",
    color: "bg-brand-orange",
    textColor: "text-brand-orange",
    borderColor: "border-brand-orange",
    lightColor: "bg-brand-orange/5",
    sessions: [
      {
        id: 6,
        title: "Strategy & Story",
        icon: Star,
        activities: [
          "Check networking progress",
          "Build 'Tell Me About Yourself'",
          "Intro C-C-A-R framework",
          "Practice intro out loud"
        ],
        homework: "Practice intro; Draft two C-C-A-R stories"
      },
      {
        id: 7,
        title: "Refinement",
        icon: UserCheck,
        activities: [
          "Strengthen C-C-A-R stories",
          "Practice behavioral questions",
          "Address gaps or pivots",
          "Develop questions for interviewers"
        ],
        homework: "Revise stories; Continue applications"
      },
      {
        id: 8,
        title: "Mock Interview",
        icon: Briefcase,
        activities: [
          "Full realistic mock interview",
          "Structured debrief & feedback",
          "Final confidence prep",
          "Launch into your new chapter"
        ],
        homework: undefined // No homework for the last session
      }
    ]
  }
];