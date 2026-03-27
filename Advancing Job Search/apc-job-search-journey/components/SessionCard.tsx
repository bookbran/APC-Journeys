import React from 'react';
import { SessionData } from '../types';

interface SessionCardProps {
  session: SessionData;
  color: string;
  isLast?: boolean;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session, color, isLast }) => {
  return (
    <div className="flex flex-col bg-white rounded-md border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="h-0.5 w-full" style={{ backgroundColor: color }}></div>
      
      <div className="p-2 flex flex-col">
        <div className="flex justify-between items-baseline mb-0.5">
          <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: color }}>
            Session {session.id}
          </span>
        </div>
        
        <h4 className="font-serif font-bold text-apc-navy text-[11px] leading-tight mb-1">
          {session.title}
        </h4>

        <ul className="space-y-0.5 mb-1">
          {session.activities.map((activity, idx) => (
            <li key={idx} className="text-[9.5px] text-apc-textLight leading-[1.3] pl-2.5 relative">
              <span className="absolute left-0 top-0 font-bold" style={{ color }}>›</span>
              {activity}
            </li>
          ))}
        </ul>

        {session.homework && (
          <div className="pt-1 border-t border-dashed border-slate-200">
            <div className="text-[8.5px] font-bold text-apc-navy uppercase tracking-wide mb-0.5">
              {session.homeworkLabel || "Between Sessions"}
            </div>
            <div className="text-[9px] text-apc-textLight italic leading-tight">
              {session.homework}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};