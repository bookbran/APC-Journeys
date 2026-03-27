import React from 'react';
import { PhaseData } from '../types';
import { SessionCard } from './SessionCard';

interface PhaseSectionProps {
  phase: PhaseData;
  className?: string;
}

export const PhaseSection: React.FC<PhaseSectionProps> = ({ phase, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Header */}
      <div 
        className="rounded-t-lg p-1.5 flex items-center gap-2 border-b-2"
        style={{ backgroundColor: phase.lightColor, borderColor: phase.color }}
      >
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm z-10"
          style={{ backgroundColor: phase.color }}
        >
          {phase.id}
        </div>
        <div className="flex-1">
          <h3 className="font-serif font-bold text-apc-navy text-[13px] leading-none mb-0.5">
            {phase.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-medium text-apc-textLight uppercase tracking-wide">
              {phase.subtitle}
            </span>
            {phase.tag && (
              <span 
                className="px-1.5 py-0.5 rounded text-[8px] font-bold text-white flex items-center shadow-sm"
                style={{ backgroundColor: phase.color }}
              >
                ✦ {phase.tag}
              </span>
            )}
          </div>
        </div>
        <div style={{ color: phase.color }} className="opacity-80">
          {phase.icon}
        </div>
      </div>

      {/* Body */}
      <div 
        className="bg-slate-50/50 p-1.5 rounded-b-lg border-l border-r border-b border-slate-200"
      >
        <div className="grid grid-cols-1 gap-1.5">
            {phase.sessions.map((session, idx) => (
                <SessionCard 
                    key={session.id} 
                    session={session} 
                    color={phase.color} 
                    isLast={idx === phase.sessions.length - 1}
                />
            ))}
        </div>
      </div>
    </div>
  );
};