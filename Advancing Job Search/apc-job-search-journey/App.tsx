import React, { useRef } from 'react';
import { Target, Map, Briefcase, Printer } from 'lucide-react';
import { PhaseSection } from './components/PhaseSection';
import { JoanieSidebar } from './components/JoanieSidebar';
import { PhaseData } from './types';

// Data Definition
const phases: PhaseData[] = [
  {
    id: 1,
    title: "Target Setting",
    subtitle: "Session 1 · Confirm Direction",
    color: "#f26727", // Brand Orange
    lightColor: "#fef0e9",
    borderColor: "#f26727",
    icon: <Target size={20} />,
    sessions: [
      {
        id: 1,
        title: "Career Review & Target Confirmation",
        activities: [
          "Walk your resume and career story together",
          "Confirm target roles, industries & location preferences",
          "Assess current materials and what needs updating",
          "Set priorities and search strategy",
          "Coach begins role research for next session"
        ],
        homework: "Meet with Joanie to begin resume & cover letter development"
      }
    ]
  },
  {
    id: 2,
    title: "Guided Mapping",
    subtitle: "Sessions 2–3 · Targeting & Networking",
    color: "#54558e", // Brand Purple
    lightColor: "#eeeff4",
    borderColor: "#54558e",
    icon: <Map size={20} />,
    tag: "Coach & client side-by-side",
    sessions: [
      {
        id: 2,
        title: "Organization Research & LinkedIn",
        activities: [
          "Review coach-researched listings in your tracker together",
          "Co-browse target companies, employee profiles & role postings",
          "Confirm and prioritize your target organization list",
          "Coach-led LinkedIn About section drafted with AI & Joanie's materials",
          "Update LinkedIn Experience with your strongest resume highlights"
        ],
        homework: "Post LinkedIn About section live; begin outreach to warm contacts"
      },
      {
        id: 3,
        title: "Networking Prep & Application Launch",
        activities: [
          "Draft informational interview outreach messages in session",
          "Build your networking target list in the tracker together",
          "Review application materials; confirm readiness",
          "Set application goals and weekly rhythm"
        ],
        homework: "Send outreach messages already drafted; apply to 3–5 high-fit roles"
      }
    ]
  },
  {
    id: 3,
    title: "Search & Interview",
    subtitle: "Sessions 4–6 · Show up with Confidence",
    color: "#16163f", // Brand Navy
    lightColor: "#e8e8f0",
    borderColor: "#16163f",
    icon: <Briefcase size={20} />,
    sessions: [
      {
        id: 4,
        title: "Interview Strategy & Story Frameworks",
        activities: [
          "Check in on applications & networking momentum",
          "Build your \"Tell Me About Yourself\" together",
          "Introduce the C-C-A-R story framework",
          "Practice your introduction out loud in session"
        ],
        homework: "Practice intro with 2–3 people; draft two C-C-A-R stories"
      },
      {
        id: 5,
        title: "Story Refinement & Role-Specific Questions",
        activities: [
          "Review and strengthen your C-C-A-R stories together",
          "Practice role-specific and behavioral questions",
          "Address challenging questions (gaps, weaknesses)",
          "Develop strong questions to ask your interviewers"
        ],
        homework: "Revise stories; draft additional responses; continue active applications"
      },
      {
        id: 6,
        title: "Mock Interview & Final Preparation",
        activities: [
          "Full realistic mock interview using your target role",
          "Structured debrief with specific, actionable feedback",
          "Final confidence-building and mindset preparation",
          "Leave ready to show up as your best self"
        ],
        homework: "",
        homeworkLabel: "Outcome"
      }
    ]
  }
];

function App() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 print:p-0 bg-gray-100 print:bg-white">
      
      {/* Print Controls (Hidden when printing) */}
      <div className="mb-6 no-print flex gap-4 items-center">
        <div className="bg-white p-4 rounded-lg shadow-sm max-w-lg text-sm text-slate-600">
          <p className="font-bold mb-1 text-slate-800">Print Instructions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ensure layout is set to <strong>Landscape</strong>.</li>
            <li>Paper size: <strong>Letter (8.5" x 11")</strong>.</li>
            <li>Enable <strong>"Background graphics"</strong> in print settings.</li>
            <li>Set margins to <strong>None</strong> or Minimum.</li>
          </ul>
        </div>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-apc-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-md transition-colors"
        >
          <Printer size={20} />
          Print / Save PDF
        </button>
      </div>

      {/* Main Document Page */}
      <div 
        ref={printRef}
        className="relative bg-white shadow-2xl print:shadow-none w-[11in] h-[8.5in] overflow-hidden flex flex-col"
        style={{ transformOrigin: 'top center' }}
      >
        {/* Top Accent Line */}
        <div className="h-2 w-full bg-gradient-to-r from-apc-navy via-apc-purple to-apc-orange shrink-0"></div>

        {/* Content Wrapper */}
        <div className="flex-1 px-6 pt-4 pb-3 flex flex-col relative z-10">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-slate-100 pb-2 mb-2">
            <div>
              <h1 className="font-serif font-bold text-2xl text-apc-navy mb-0.5 tracking-tight">
                Your Job Search Journey
              </h1>
              <p className="font-serif italic text-apc-orange text-sm">
                Building strategy, materials, and confidence.
              </p>
              <p className="text-[11px] text-apc-textLight mt-1 max-w-2xl leading-snug">
                You know where you're headed. We move quickly into strategy, materials, and action. 
                With a coach guiding your search and targeting, Joanie building your materials, 
                and a clear process to carry you to an offer.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <img 
                src="https://www.aportlandcareer.com/wp-content/uploads/2020/06/APC-Logo-trans.png" 
                alt="A Portland Career" 
                className="h-11 w-auto object-contain"
              />
              <div className="bg-apc-navy text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                Advancing Track · 6 Sessions
              </div>
            </div>
          </div>

          {/* Journey Path Visual Connector (Absolute) */}
          {/* This SVG draws the connecting lines behind the cards */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
             <svg width="100%" height="100%" viewBox="0 0 1056 816" preserveAspectRatio="none">
                {/* Curve from Phase 1 to Phase 2 */}
                <path 
                  d="M 280 400 C 280 450, 420 450, 420 350" 
                  fill="none" 
                  stroke="#e2e8f0" 
                  strokeWidth="4" 
                  strokeDasharray="8 8"
                />
                 {/* Curve from Phase 2 to Phase 3 */}
                <path 
                  d="M 680 350 C 680 500, 300 500, 150 580" 
                  fill="none" 
                  stroke="#e2e8f0" 
                  strokeWidth="4" 
                  strokeDasharray="8 8"
                />
             </svg>
          </div>

          {/* Main Grid Layout */}
          <div className="flex-1 grid grid-cols-12 gap-2.5 z-10 h-full">
            
            {/* Phase 1: Top Left */}
            <div className="col-span-3 flex flex-col">
              <PhaseSection phase={phases[0]} />
            </div>

            {/* Phase 2: Top Center/Right (Spans wider for 2 sessions) */}
            <div className="col-span-5 flex flex-col">
              <PhaseSection phase={phases[1]} />
            </div>

            {/* Joanie Sidebar: Top Right */}
            <div className="col-span-4 flex flex-col">
               <JoanieSidebar />
               
               <div className="mt-2 bg-apc-bg/50 rounded-lg px-3 py-1.5 border border-dashed border-slate-200">
                   <p className="text-center text-[9px] text-apc-textLight italic">
                     "This journey is yours. We walk with you every step of the way."
                   </p>
               </div>
            </div>

            {/* Phase 3: Bottom Row (Spanning full width) */}
            <div className="col-span-12 flex flex-col">
               {/* Custom Horizontal Layout for Phase 3 since it has 3 sessions */}
               <div className="flex flex-col h-full">
                 <div 
                    className="rounded-t-lg p-1.5 flex items-center gap-2 border-b-2"
                    style={{ backgroundColor: phases[2].lightColor, borderColor: phases[2].color }}
                  >
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm"
                      style={{ backgroundColor: phases[2].color }}
                    >
                      {phases[2].id}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-apc-navy text-[13px] leading-none mb-0.5">
                        {phases[2].title}
                      </h3>
                      <span className="text-[9px] font-medium text-apc-textLight uppercase tracking-wide">
                        {phases[2].subtitle}
                      </span>
                    </div>
                    <div style={{ color: phases[2].color }} className="opacity-80">
                      {phases[2].icon}
                    </div>
                  </div>
                  
                  {/* Horizontal Grid for Sessions */}
                  <div className="bg-slate-50/50 p-2 rounded-b-lg border-l border-r border-b border-slate-200">
                    <div className="grid grid-cols-3 gap-2.5">
                       {phases[2].sessions.map((session, idx) => (
                           <div key={session.id}>
                              <div className="flex flex-col bg-white rounded-md border border-slate-200 shadow-sm relative overflow-hidden">
                                <div className="h-0.5 w-full" style={{ backgroundColor: phases[2].color }}></div>
                                <div className="p-2 flex flex-col">
                                  <div className="flex justify-between items-baseline mb-0.5">
                                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: phases[2].color }}>
                                      Session {session.id}
                                    </span>
                                  </div>
                                  <h4 className="font-serif font-bold text-apc-navy text-[11px] leading-tight mb-1">
                                    {session.title}
                                  </h4>
                                  <ul className="space-y-0.5 mb-1">
                                    {session.activities.map((activity, aIdx) => (
                                      <li key={aIdx} className="text-[9.5px] text-apc-textLight leading-[1.3] pl-2.5 relative">
                                        <span className="absolute left-0 top-0 font-bold" style={{ color: phases[2].color }}>›</span>
                                        {activity}
                                      </li>
                                    ))}
                                  </ul>
                                  {session.homework && (
                                    <div className="pt-1 border-t border-dashed border-slate-200">
                                      <div className="text-[8.5px] font-bold text-apc-navy uppercase tracking-wide mb-0.5">
                                        {session.homeworkLabel || "Between Sessions"}
                                      </div>
                                      <div className="text-[9px] text-apc-textLight italic leading-tight truncate">
                                        {session.homework}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                           </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-auto pt-1.5 border-t border-slate-200 flex justify-between items-center text-[9px] text-slate-400">
            <span>© A Portland Career</span>
            <span className="font-medium text-apc-blue">www.aportlandcareer.com</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;