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
    title: "Open warm",
    description: "\"Hi [name], this is [you] with A Portland Career — how's it going?\" Let them settle in. Keep it natural.",
  },
  {
    step: 2,
    title: "Reference what they shared",
    description: "Bring up something from their intake note or LinkedIn. Ask a light opening question about what they wrote. This shows you prepared and you care.",
  },
  {
    step: 3,
    title: "Get them talking",
    description: "If they didn't share much: \"Tell me a little more about what's been going on in your mind\" or \"What's been happening relative to your job search?\" Let them open up.",
  },
  {
    step: 4,
    title: "Listen and reflect",
    description: "Confirm what you're hearing. Normalize their experience — many people are in a similar place. Share your own awareness or relate to what the team has seen. They should feel understood before you guide.",
  },
  {
    step: 5,
    title: "Assess with key questions",
    description: "Ask about timeline, income needs, application activity. These tell you which pathway fits. (See \"Questions That Tell You What You Need to Know\" below.)",
  },
  {
    step: 6,
    title: "Share your recommendation",
    description: "\"Based on your situation, I think this kind of approach would be the best fit...\" Walk them through the pathway concisely, beginning to end. Explain why this path fits what they told you.",
  },
  {
    step: 7,
    title: "Outline the next step",
    description: "Either introduce them directly to the coach, or: \"I have a couple of people in mind — let me confirm the best fit and I'll follow up with that introduction.\" The second option is always safe if you're unsure.",
  },
  {
    step: 8,
    title: "Set expectations and close",
    description: "Be specific about when they'll hear from you — \"in about 20 minutes,\" \"later this afternoon,\" or \"tomorrow morning.\" Mention: no fee for the first 15-minute conversation with their coach, the hourly rate, and that billing is per-session through QuickBooks.",
  },
];

export const keyQuestions = [
  {
    question: "\"How soon do you need to be in a new job?\"",
    whatItTellsYou: "Less than a few months = Pivot or Advancing. Five to six months or more with flexibility = could be Explorer.",
  },
  {
    question: "\"Do you have a sense of what you want to do, or is that part of what you're figuring out?\"",
    whatItTellsYou: "\"I don't know\" + has time and flexibility = Explorer. \"I know but want something different\" = Pivot. Clear target = Advancing.",
  },
  {
    question: "\"How much do you need to be making, and by when?\"",
    whatItTellsYou: "$75–80K+ within a year with urgency = Pivot (transferable skills, bridges). More flexibility on income and timeline = Explorer.",
  },
  {
    question: "\"How many applications have you been sending out? What's your response rate?\"",
    whatItTellsYou: "High volume, very low response = materials issue → start with Joanie. Getting interviews but not closing = interview prep coach.",
  },
];

export const avoidList = [
  {
    title: "Talking too much about yourself",
    detail: "If the caller asks about you, keep it brief. Watch how long you're talking — the caller should be doing most of it.",
  },
  {
    title: "Taking calls when you're not settled",
    detail: "Don't take inquiry calls while driving, walking, or distracted. Sit down in a quiet space — or better yet, stand up and move around your office. It activates your presence when you can't see someone's face.",
  },
  {
    title: "Trying to have all the answers",
    detail: "If they ask something you don't know, just say: \"That's a great question — I'm not sure about that. Let me do a little digging and get back to you.\" Lean on the team.",
  },
  {
    title: "Recommending before you've listened",
    detail: "Don't jump to a solution until the caller can see that you truly understand their situation. Reflective listening first, guidance second.",
  },
  {
    title: "Feeling pressure to match the coach on the spot",
    detail: "\"Let me confirm the best fit\" is always a perfectly good next step. You don't have to know exactly who — consult with Dan first if you need to.",
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
