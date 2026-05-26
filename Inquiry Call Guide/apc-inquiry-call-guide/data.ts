export interface CoachProfile {
  name: string;
  title: string;
  rate: string;
  specialties: string[];
  bestFor: string;
  note?: string;
}

export interface SituationRoute {
  situation: string;
  journey: string;
  journeyColor: string;
  coaches: string;
  signal: string;
}

export const coaches: CoachProfile[] = [
  {
    name: "Aimee Chase-Bosland",
    title: "Job Search / Career Decision Coach",
    rate: "$170/hr",
    specialties: ["Pivoting", "Job Search", "Interview Prep", "Networking"],
    bestFor: "Pivoters and advancers across professions. Especially strong at helping clients see where their strengths transfer. Expert interview prep coach. Also mentoring Victoria.",
  },
  {
    name: "Victoria",
    title: "Job Search / Career Pivot Coach",
    rate: "$170/hr",
    specialties: ["Pivoting", "Job Search"],
    bestFor: "Pivoters and job searchers. Brings 30+ years of practical experience in business ownership, executive leadership, and recruitment. Currently training with Aimee.",
    note: "Newer to the team — learning pivoting and job search coaching first.",
  },
  {
    name: "Emily Hordes",
    title: "Job Search Coach",
    rate: "$170/hr",
    specialties: ["Advancing", "Pivoting", "Networking", "Creative Careers", "Accountability"],
    bestFor: "Advancers and pivoters who need strategic, action-oriented accountability. Go-to coach for creative professionals and portfolio-based job searches. Expert networking coach.",
  },
  {
    name: "Krute Aroonsuck",
    title: "Job Search / Career Decision Coach",
    rate: "$170/hr",
    specialties: ["Career Exploring", "Government Roles", "Security Roles"],
    bestFor: "Explorers especially. Also strong with government and security job seekers given his military and state government background. Gifted at drawing information out of people and building rapport.",
  },
  {
    name: "Joanie Donnelly",
    title: "Resume Writer & Materials Specialist",
    rate: "$100/hr",
    specialties: ["Resumes", "Cover Letters", "LinkedIn", "Application Support", "Role Fit"],
    bestFor: "Any client whose materials need work — especially those applying heavily with low response rates. Works collaboratively and ongoing with clients across multiple applications. Also helps assess which roles to pursue vs. skip.",
  },
  {
    name: "Ursina Teuscher, Ph.D.",
    title: "Performance Coach / Career Decision Coach",
    rate: "$960 package",
    specialties: ["Career Exploring", "Decision Science", "STEM / Technical", "ADHD", "Performance Coaching"],
    bestFor: "Technical and STEM-oriented clients. Specialist in ADHD support and productivity coaching. Co-designed the Career Explorer pathway. Deep expertise in decision-making.",
    note: "Defer pricing details to Ursina — her package structure is different.",
  },
  {
    name: "Janet Brumbaugh",
    title: "Senior & Executive Job Search Coach",
    rate: "$200/hr",
    specialties: ["Senior/Executive Search", "Interview Prep", "Recruiter Perspective"],
    bestFor: "Senior-level professionals seeking $90K+ roles — directors, managers, C-suite. Brings 25+ years as an executive recruiter. Has her own refined process.",
    note: "Defer process details to Janet — she outlines her own approach with clients.",
  },
  {
    name: "Autumn Bullard",
    title: "Career Pivot Coach",
    rate: "$170/hr",
    specialties: ["Career Exploring", "Pivoting", "Mission-Aligned Work", "Health & Nonprofit"],
    bestFor: "Explorers primarily, some pivoters. Works especially well with women and clients seeking mission-aligned, values-driven, health, or nonprofit career paths. One of our most gifted reflective listeners.",
  },
  {
    name: "Dan Hahn",
    title: "Owner / Job Search & Career Decision Coach",
    rate: "$220/hr",
    specialties: ["Enterprising / Builder Clients", "Technical / Marketing", "AI & Skills Development"],
    bestFor: "Fill-in when other coaches are at capacity or when the client is a clear fit — enterprising, builder-minded, technical, or marketing backgrounds. Primarily focused on running the business, partnerships, and coach development.",
    note: "Route to Dan as a last resort or when a specific fit is clear.",
  },
];

export const situationRoutes: SituationRoute[] = [
  {
    situation: "Doesn't know what they want, has time and flexibility, open to deep exploration",
    journey: "Career Explorer",
    journeyColor: "#f26727",
    coaches: "Krute, Autumn, Ursina",
    signal: "\"I don't really know what I want to do\" + comfortable taking a step down in pay + has months of runway",
  },
  {
    situation: "Wants something different, needs a role within months, thinking about \"bridges\"",
    journey: "Pivot",
    journeyColor: "#54558e",
    coaches: "Aimee, Victoria, Autumn, Emily",
    signal: "\"I need something soon but I want it to be different\" + needs $75K+ within a year",
  },
  {
    situation: "Knows their target, active job search, needs strategy and accountability",
    journey: "Advancing",
    journeyColor: "#16163f",
    coaches: "Aimee, Emily, Victoria",
    signal: "Clear on role type and industry, looking for an edge in their search process",
  },
  {
    situation: "Applying heavily with very low response rate",
    journey: "Joanie First",
    journeyColor: "#2DA3CB",
    coaches: "Joanie",
    signal: "Lots of applications, almost no callbacks — materials are likely the issue",
  },
  {
    situation: "Has interviews coming up but not closing",
    journey: "Interview Prep",
    journeyColor: "#16163f",
    coaches: "Aimee, Emily, or Janet (senior level)",
    signal: "Getting to interviews but not getting offers — need to sharpen story and presence",
  },
  {
    situation: "Senior or executive level, $90K+, director/C-suite",
    journey: "Senior Job Search",
    journeyColor: "#16163f",
    coaches: "Janet",
    signal: "Seeking leadership-level roles, needs a recruiter's perspective on positioning",
  },
  {
    situation: "Creative professional, portfolio-based search",
    journey: "Advancing or Pivot",
    journeyColor: "#54558e",
    coaches: "Emily",
    signal: "Artist, designer, writer — needs portfolio review and creative job search strategy",
  },
  {
    situation: "STEM, technical, or engineering background",
    journey: "Explorer or Performance",
    journeyColor: "#f26727",
    coaches: "Ursina",
    signal: "Technical mindset, may need structured decision-making support",
  },
  {
    situation: "Government or security roles",
    journey: "Job Search",
    journeyColor: "#16163f",
    coaches: "Krute",
    signal: "Targeting state, city, county, federal, or security-related positions",
  },
  {
    situation: "ADHD, needs structure and small collaborative steps",
    journey: "Any (guided mapping is key)",
    journeyColor: "#2DA3CB",
    coaches: "Ursina (specialist), all coaches equipped",
    signal: "Mentions ADHD or difficulty with follow-through — our guided mapping approach is built for this",
  },
  {
    situation: "Mission-aligned, health, or nonprofit focus",
    journey: "Explorer or Pivot",
    journeyColor: "#f26727",
    coaches: "Autumn",
    signal: "Looking for work with purpose and impact, values-driven career decisions",
  },
  {
    situation: "Just wants insight — what could I do? (not full job search)",
    journey: "Pivot (light, with off-ramp)",
    journeyColor: "#54558e",
    coaches: "Aimee, Victoria",
    signal: "\"I just want to know what I could be doing\" — interested in skill mapping, not necessarily materials work yet",
  },
];

export const callFlowSteps = [
  {
    step: 1,
    title: "Open warm — \"Thanks for reaching out\"",
    description: "\"Hi [name], this is [you] with A Portland Career — thanks for reaching out. How's it going?\" Let them settle in. \"Thanks for reaching out\" is a small phrase that does a lot — it acknowledges the courage it took to make the call.",
  },
  {
    step: 2,
    title: "Reference what they shared",
    description: "Bring up something specific from their intake note or LinkedIn. Ask a light opening question about what they wrote. This shows you prepared and you care.",
  },
  {
    step: 3,
    title: "Get them talking — first half is theirs",
    description: "\"Tell me a little more about what's been going on\" or \"What's been happening with your job search?\" The first half of the call belongs to them. Brief questions from you, mostly listening. This is where the choreography starts.",
  },
  {
    step: 4,
    title: "Listen and reflect",
    description: "Confirm what you're hearing in your own words. Normalize their experience. They should feel understood before you guide — when they nod and say \"yes, that's it,\" you know the foundation is set.",
  },
  {
    step: 5,
    title: "Assess with key questions",
    description: "Lead with timeline (\"How soon do you need a job?\"). Then direction, then income. Applications and response rate matter, but they're a smaller piece. (See \"Questions That Tell You What You Need to Know\" below for priorities.)",
  },
  {
    step: 6,
    title: "Talk them through the pathway with the journey map open",
    description: "\"Based on what you've shared, the path I think fits is…\" Have the journey map for that pathway visible on your screen — walk them through it phase by phase. Frame it as flexible: some pieces will matter more for them, some less, and that's by design.",
  },
  {
    step: 7,
    title: "Mention the fee as part of how it works",
    description: "After the pathway lands, the fee is an afterthought tied to pacing and billing — not a gate. \"Sessions run an hour at $170, billed per session through QuickBooks. The first 15-minute call with your coach is no charge.\" If it's a good fit, this is just information they note and move past.",
  },
  {
    step: 8,
    title: "Outline the next step and close",
    description: "Either introduce them to the coach, or: \"I'm thinking of the coach who's the best fit for you — I'll connect you with them in the next 24 hours.\" Be specific about the timing. Then thank them for reaching out.",
  },
];

export const keyQuestions = [
  {
    priority: "Most important",
    question: "\"How soon do you need to be in a new job?\"",
    whatItTellsYou: "This is the question that protects the client from a bad fit. Even an Explorer-fit candidate won't do well in exploration sessions if they're in a real crunch to land work. Less than a few months = Pivot or Advancing. Five-plus months with flexibility = Explorer is on the table.",
  },
  {
    priority: "Direction signal",
    question: "\"Do you have a sense of what you want to do, or is that part of what you're figuring out?\"",
    whatItTellsYou: "\"I don't know\" + has time = Explorer. \"I know but want something different\" = Pivot. Clear target = Advancing. Pair this with the timeline answer to make the call.",
  },
  {
    priority: "Pressure check",
    question: "\"How much do you need to be making, and by when?\"",
    whatItTellsYou: "$75–80K+ within a year with urgency = Pivot (transferable skills, bridges). Real flexibility on income + timeline = Explorer is viable. Use this to confirm whether the pacing of Explorer actually fits their life.",
  },
  {
    priority: "Useful, not the gate",
    question: "\"Have you been sending applications? What's the response been like?\"",
    whatItTellsYou: "Less central than timeline, but still tells you something. High volume + very low response = likely a materials issue → loop in Joanie. Getting interviews but not closing = interview prep. Don't let this question crowd out the timeline conversation.",
  },
];

export const avoidList = [
  {
    title: "Leading with the fee",
    detail: "Don't open with — or rush toward — \"can you pay $170 an hour?\" That puts the relationship on the wrong footing. The fee is information they need, but it lands as an afterthought once they can see the pathway fits. Reflect their situation back, talk through the fitting service, then mention how billing works.",
  },
  {
    title: "Emailing journey maps to the client",
    detail: "Use the journey maps yourself during the call to talk them through what working with us looks like. Don't send them out — that's the coach's job after their first conversation. We want the map to land in the context the coach sets, not as a cold attachment.",
  },
  {
    title: "Talking too much about yourself",
    detail: "If the caller asks about you, keep it brief. Watch how long you're talking — the caller should be doing most of it, especially in the first half.",
  },
  {
    title: "Taking calls when you're not settled",
    detail: "Don't take inquiry calls while driving, walking, or distracted. Sit down in a quiet space — or better yet, stand up and move around your office. It activates your presence when you can't see someone's face.",
  },
  {
    title: "Trying to have all the answers",
    detail: "If they ask something you don't know, just say: \"That's a great question — let me look into that and get back to you.\" Lean on the team.",
  },
  {
    title: "Recommending before you've listened",
    detail: "Don't jump to a solution until the caller can see that you truly understand their situation. Reflective listening first, guidance second.",
  },
  {
    title: "Feeling pressure to match the coach on the spot",
    detail: "\"Let me confirm the best fit and follow up in the next 24 hours\" is always a perfectly good next step. You don't have to know exactly who — consult with Dan first if you need to.",
  },
];

export const pricingData = [
  { name: "Dan Hahn", rate: "$220/hr", note: "Owner — typically a fill-in" },
  { name: "Janet Brumbaugh", rate: "$200/hr", note: "Senior/executive clients" },
  { name: "Aimee, Victoria, Emily, Krute, Autumn", rate: "$170/hr", note: "All other coaches" },
  { name: "Joanie Donnelly", rate: "$100/hr", note: "Materials specialist" },
  { name: "Ursina Teuscher", rate: "$960 package", note: "Defer details to Ursina" },
  { name: "First 15-minute coach call", rate: "No charge", note: "Rapport-building conversation" },
];

export interface FeeResponseStep {
  scenario: string;
  approach: string;
  example: string;
}

export const feeResponseFlow: FeeResponseStep[] = [
  {
    scenario: "They hear $170 and say nothing / move on",
    approach: "That's the most common response when the pathway lands well. The fee was information, not an obstacle. Keep moving toward next steps.",
    example: "\"Great — I'll send the introduction to [coach] in the next 24 hours and they'll reach out to set up the free 15-minute call.\"",
  },
  {
    scenario: "They mention $170/session is too much",
    approach: "Sliding scale is available — but only offer it when there's a clear financial signal. Step it down: $140 first, then $120, and in rare circumstances $100. Don't lead with the discount.",
    example: "\"We do have a sliding scale for folks where the fee is a real stretch — we can step that down to $140 a session, and in some cases lower than that. Would that change the picture for you?\"",
  },
  {
    scenario: "They want to think about it / aren't sure",
    approach: "Remind them the first 15-minute coach call is free. It gives them more information before deciding, with no pressure.",
    example: "\"That's totally fair. The first call with [coach] is free — fifteen minutes, no commitment. That'll give you a better feel for whether it's the right fit before any money's on the table. Want me to set that up?\"",
  },
  {
    scenario: "Clearly not interested / not the right time",
    approach: "Close gracefully. Don't push. Thank them for reaching out — that's the lasting impression we want.",
    example: "\"I appreciate you taking the time today, and thanks again for reaching out. If anything shifts down the road, you know where to find us.\"",
  },
];

// Journey content lives in the shared `apc-journeys-data` package so the inquiry
// call guide, intake system, and CRM all read from one source of truth. To edit
// phases/sessions, update apc-journeys-data and `npm update apc-journeys-data` here.
export {
  JOURNEYS as journeys,
  getJourneyByKey,
  isJourneyKey,
} from 'apc-journeys-data';
export type {
  Journey,
  JourneyKey,
  JourneyPhase,
  JourneySession,
} from 'apc-journeys-data';
