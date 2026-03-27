import React from 'react';
import { PHASES } from '../constants';
import SessionCard from './SessionCard';
import JoanieCard from './JoanieCard';
import { Map, Flag, ArrowRight } from 'lucide-react';

const CareerJourney = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="w-full h-full bg-white relative flex overflow-hidden">
      
      {/* LEFT SIDEBAR (20%) */}
      <aside className="w-[20%] h-full bg-brand-bg border-r border-gray-200 flex flex-col p-4 relative z-20">
        {/* Logo Area */}
        <div className="mb-5">
           <img 
              src="https://www.aportlandcareer.com/wp-content/uploads/2020/06/APC-Logo-trans.png" 
              alt="A Portland Career" 
              className="w-full h-auto object-contain mb-3"
            />
            <div className="h-1 w-12 bg-brand-orange mb-1.5 rounded-full"></div>
            <h1 className="font-serif text-2xl font-bold text-brand-navy leading-tight">
              Pivot <br/>Journey
            </h1>
            <p className="text-[11px] text-brand-textLight mt-1.5 leading-relaxed">
              A structured 8-session path from self-discovery to your next chapter.
            </p>
        </div>

        {/* Feature: Joanie */}
        <div className="mb-auto">
          <JoanieCard />
        </div>

        {/* Footer Info */}
        <div className="mt-4 text-[10px] text-brand-textLight border-t border-gray-200 pt-3">
          <p className="font-bold text-brand-navy mb-1">A Portland Career</p>
          <p>www.aportlandcareer.com</p>
          <p>Portland, OR</p>
        </div>
      </aside>

      {/* MAIN CONTENT (80%) */}
      <main className="flex-1 flex flex-col h-full relative">
        
        {/* PHASE 1: NAVY TRACK */}
        <section className="flex-1 relative border-b border-gray-100 flex">
           {/* Phase Label */}
           <div className="w-[110px] bg-brand-navy flex flex-col justify-center p-3 text-white relative overflow-hidden shrink-0">
              <div className="relative z-10">
                <span className="text-[36px] font-serif font-black opacity-20 absolute -top-3 -left-2">01</span>
                <h2 className="font-serif text-[15px] font-bold leading-tight mb-1 relative z-10">{PHASES[0].title}</h2>
                <p className="text-[9px] opacity-80 font-medium">{PHASES[0].subtitle}</p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-7 h-7 bg-white z-0"></div>
           </div>

           {/* Content Track */}
           <div className="flex-1 bg-brand-navy/5 p-3 flex items-center gap-2">
              <div className="flex-1 flex items-stretch">
                {PHASES[0].sessions.map((session, idx) => (
                  <SessionCard 
                    key={session.id}
                    session={session}
                    colorClass={PHASES[0].color}
                    borderColorClass={PHASES[0].borderColor}
                    textColorClass={PHASES[0].textColor}
                    isLast={idx === PHASES[0].sessions.length - 1}
                  />
                ))}
                {/* Spacer to fill visually if needed, though flex handles it */}
                <div className="flex-[0.5] hidden lg:block"></div> 
              </div>
           </div>
        </section>

        {/* PHASE 2: PURPLE TRACK */}
        <section className="flex-1 relative border-b border-gray-100 flex">
           {/* Phase Label */}
           <div className="w-[110px] bg-brand-purple flex flex-col justify-center p-3 text-white relative overflow-hidden shrink-0">
              <div className="relative z-10">
                <span className="text-[36px] font-serif font-black opacity-20 absolute -top-3 -left-2">02</span>
                <h2 className="font-serif text-[15px] font-bold leading-tight mb-1 relative z-10">{PHASES[1].title}</h2>
                <p className="text-[9px] opacity-80 font-medium">{PHASES[1].subtitle}</p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-7 h-7 bg-white z-0"></div>
           </div>

           {/* Content Track */}
           <div className="flex-1 bg-brand-purple/5 p-3 flex items-center gap-2">
               <div className="flex-1 flex items-stretch">
                {PHASES[1].sessions.map((session, idx) => (
                  <SessionCard 
                    key={session.id}
                    session={session}
                    colorClass={PHASES[1].color}
                    borderColorClass={PHASES[1].borderColor}
                    textColorClass={PHASES[1].textColor}
                    isLast={idx === PHASES[1].sessions.length - 1}
                  />
                ))}
              </div>
           </div>
        </section>

        {/* PHASE 3: ORANGE TRACK */}
        <section className="flex-1 relative flex">
           {/* Phase Label */}
           <div className="w-[110px] bg-brand-orange flex flex-col justify-center p-3 text-white relative overflow-hidden shrink-0">
              <div className="relative z-10">
                <span className="text-[36px] font-serif font-black opacity-20 absolute -top-3 -left-2">03</span>
                <h2 className="font-serif text-[15px] font-bold leading-tight mb-1 relative z-10">{PHASES[2].title}</h2>
                <p className="text-[9px] opacity-80 font-medium">{PHASES[2].subtitle}</p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-7 h-7 bg-white z-0"></div>
           </div>

           {/* Content Track */}
           <div className="flex-1 bg-brand-orange/5 p-3 flex items-center gap-2">
               <div className="flex-1 flex items-stretch gap-2">
                {PHASES[2].sessions.map((session, idx) => (
                  <SessionCard 
                    key={session.id}
                    session={session}
                    colorClass={PHASES[2].color}
                    borderColorClass={PHASES[2].borderColor}
                    textColorClass={PHASES[2].textColor}
                    isLast={false} // Always show arrow to lead to finish
                  />
                ))}
                
                {/* Finish Line Card */}
                <div className="w-32 flex flex-col justify-center items-center ml-2 relative">
                   <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
                      <ArrowRight className="text-brand-orange opacity-40" size={20} />
                   </div>
                   <div className="bg-brand-orange text-white p-3 rounded-full mb-2 shadow-lg scale-110">
                      <Flag size={20} strokeWidth={3} />
                   </div>
                   <div className="text-center">
                      <h4 className="font-serif font-bold text-brand-navy text-[12px]">Launch</h4>
                      <p className="text-[10px] text-brand-textLight leading-tight">Ready for your new chapter</p>
                   </div>
                </div>

              </div>
           </div>
        </section>

      </main>
    </div>
  );
});

CareerJourney.displayName = 'CareerJourney';

export default CareerJourney;