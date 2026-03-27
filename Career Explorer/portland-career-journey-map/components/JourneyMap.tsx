import React from 'react';
import { phases } from '../data';
import { SessionCard } from './SessionCard';
import { MapPin, ArrowRight } from 'lucide-react';

export const JourneyMap = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
      className="bg-brand-bg relative overflow-hidden shadow-2xl"
      style={{ width: '11in', height: '8.5in' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Header */}
      <div className="relative z-10 px-10 pt-6 pb-3 flex justify-between items-start border-b-2 border-brand-navy/10 mx-10">
        <div className="flex flex-col">
           <h1 className="font-serif text-2xl font-bold text-brand-navy mb-0.5">
             Your Career Exploration Journey
           </h1>
           <p className="text-brand-purple italic text-sm">
             A guided process to discover what's next — and build a plan that's truly yours
           </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-brand-navy text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-widest">
            Career Explorer Track
          </div>
          <img 
            src="https://www.aportlandcareer.com/wp-content/uploads/2020/06/APC-Logo-trans.png" 
            alt="APC Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* SVG Path Layer - Creates the "Snake" effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{top: '120px'}}>
        {/* Phase 1 to Phase 2 Connector */}
        <path 
          d="M 880 120 C 1000 120, 1000 360, 880 360 L 180 360 C 60 360, 60 600, 180 600 L 400 600"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="40"
          strokeLinecap="round"
        />
        <path 
          d="M 880 120 C 1000 120, 1000 360, 880 360 L 180 360 C 60 360, 60 600, 180 600 L 400 600"
          fill="none"
          stroke="#94a3b8" // Slate 400
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeLinecap="round"
          className="opacity-30"
        />
      </svg>

      {/* Main Grid Content */}
      <div className="relative z-10 px-12 pt-6 h-[calc(100%-110px)]">
        
        {/* Row 1: Phase 1 (Left to Right) */}
        <div className="relative mb-7">
            <div className="absolute -top-5 left-0 flex items-center gap-2">
                <div className="bg-brand-purple text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">1</div>
                <h2 className="font-serif font-bold text-brand-purple text-base">Self-Discovery</h2>
                <span className="text-[11px] text-slate-500 font-medium ml-2">Who you are, what energizes you</span>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
                {phases[0].sessions.map(session => (
                    <div key={session.id} className="h-[175px]">
                         <SessionCard 
                            session={session} 
                            colorClass="bg-brand-purple" 
                            borderColor="text-brand-purple"
                        />
                    </div>
                ))}
                <div></div> 
            </div>
        </div>

        {/* Row 2: Phase 2 (Right to Left) */}
        <div className="relative mb-8">
             <div className="absolute -top-5 right-32 flex items-center gap-2 flex-row-reverse">
                <div className="bg-brand-blue text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">2</div>
                <h2 className="font-serif font-bold text-brand-blue text-base">Guided Mapping</h2>
                <span className="text-[11px] text-slate-500 font-medium mr-2">Exploring possibilities together</span>
            </div>

            <div className="grid grid-cols-4 gap-6 px-0" dir="rtl">
                <div className="col-start-1 h-[175px]">
                    <SessionCard 
                        session={phases[1].sessions[0]} 
                        colorClass="bg-brand-blue" 
                        borderColor="text-brand-blue"
                    />
                </div>
                <div className="col-start-2 h-[175px]">
                    <SessionCard 
                        session={phases[1].sessions[1]} 
                        colorClass="bg-brand-blue" 
                        borderColor="text-brand-blue"
                    />
                </div>
                <div className="col-start-3 h-[175px]">
                    <SessionCard 
                        session={phases[1].sessions[2]} 
                        colorClass="bg-brand-blue" 
                        borderColor="text-brand-blue"
                    />
                </div>
                <div></div>
            </div>
        </div>

        {/* Row 3: Phase 3 (Left to Right) */}
        <div className="relative">
             <div className="absolute -top-5 left-0 flex items-center gap-2">
                <div className="bg-brand-orange text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">3</div>
                <h2 className="font-serif font-bold text-brand-orange text-base">Pathway Planning</h2>
                <span className="text-[11px] text-slate-500 font-medium ml-2">Your plan forward</span>
            </div>

            <div className="grid grid-cols-4 gap-6">
                 <div className="h-[150px]">
                    <SessionCard 
                        session={phases[2].sessions[0]} 
                        colorClass="bg-brand-orange" 
                        borderColor="text-brand-orange"
                    />
                </div>
                
                {/* The "Finish" State */}
                <div className="col-span-2 flex items-center pl-6 relative">
                    <ArrowRight className="text-brand-orange/40 mr-4 w-10 h-10" />
                    <div className="border-2 border-brand-orange border-dashed rounded-xl p-3 bg-orange-50/50 w-full flex items-center gap-3">
                        <div className="bg-brand-orange p-2.5 rounded-full text-white shadow-lg">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-serif font-bold text-brand-navy text-base">Your Next Chapter</h4>
                            <p className="text-[11px] text-slate-600">
                                Clarity, direction, and a concrete roadmap for your career transition.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full px-10 pb-3 pt-3 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-200 mx-auto" style={{width: 'calc(100% - 5rem)', left: '2.5rem'}}>
        <p className="italic">This journey is yours. Your coach walks with you every step of the way.</p>
        <p className="font-semibold text-brand-blue">www.aportlandcareer.com</p>
      </div>
    </div>
  );
});

JourneyMap.displayName = 'JourneyMap';