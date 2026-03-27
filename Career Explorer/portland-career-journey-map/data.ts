import { PhaseData } from './types';

export const phases: PhaseData[] = [
  {
    id: 1,
    name: "Self-Discovery",
    description: "Who you are, what energizes you",
    color: "brand-purple", // #54558e
    sessions: [
      {
        id: 1,
        title: "Story & Interests",
        activities: [
          "Share life story & career history",
          "Explore interests across decades",
          "Identify energizing themes",
          "Build psychological safety"
        ],
        homework: "IPIP 300 & 16 Personalities assessments"
      },
      {
        id: 2,
        title: "Personality & Self-Discovery",
        activities: [
          "Debrief assessment results",
          "Map traits to past work",
          "Identify thriving environments",
          "Connect insights to directions"
        ],
        homework: "Motivated Skills Matrix & Gallup Strengths"
      },
      {
        id: 3,
        title: "Strengths & Preferences",
        activities: [
          "Review strengths assessment",
          "Build Career Preferences Model",
          "Connect strengths to values",
          "Discuss with trusted peer"
        ],
        homework: "Refine preferences; discuss top criteria"
      }
    ]
  },
  {
    id: 2,
    name: "Guided Mapping",
    description: "Exploring the world of possibilities together",
    color: "brand-blue", // #2DA3CB
    sessions: [
      {
        id: 4,
        title: "Industry Discovery",
        activities: [
          "Finalize Preferences Model",
          "AI & O*NET exploration",
          "Real-time energy check",
          "Select 3-4 target industries"
        ],
        homework: "Read article on two industries of interest"
      },
      {
        id: 5,
        title: "Org & Role Exploration",
        activities: [
          "Co-browse target companies",
          "Analyze job postings together",
          "Build target list in real-time",
          "Note curiosity triggers"
        ],
        homework: "Curiosity conversation outreach"
      },
      {
        id: 6,
        title: "Networking for Exploration",
        activities: [
          "Debrief curiosity conversation",
          "Draft outreach messages",
          "Role-play interview questions",
          "Identify confirmation needs"
        ],
        homework: "Send outreach; conduct interviews"
      }
    ]
  },
  {
    id: 3,
    name: "Pathway Planning",
    description: "Your plan forward",
    color: "brand-orange", // #f26727
    sessions: [
      {
        id: 7,
        title: "Synthesis & Roadmap",
        activities: [
          "Review all learnings",
          "Filter via Preferences Model",
          "Co-create transition roadmap",
          "Define clear next steps"
        ]
      }
    ]
  }
];