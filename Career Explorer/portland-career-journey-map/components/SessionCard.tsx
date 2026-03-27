import React from 'react';
import { SessionData } from '../types';
import { CheckCircle2, BookOpen } from 'lucide-react';

interface SessionCardProps {
  session: SessionData;
  colorClass: string;
  borderColor: string;
  isLast?: boolean;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session, colorClass, borderColor }) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-sm border border-slate-200 w-full h-full flex flex-col overflow-hidden`}>
      <div className={`h-1 w-full ${colorClass}`}></div>
      
      <div className="p-2.5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-1">
          <span className={`text-[9px] font-bold uppercase tracking-wider ${borderColor}`}>
            Session {session.id}
          </span>
        </div>
        
        <h3 className="font-serif text-[13px] font-bold text-brand-navy mb-1.5 leading-tight">
          {session.title}
        </h3>

        <ul className="space-y-1 mb-auto">
          {session.activities.map((activity, idx) => (
            <li key={idx} className="text-[10.5px] text-slate-600 flex items-start gap-1.5 leading-snug">
              <CheckCircle2 size={10} className={`mt-0.5 shrink-0 ${borderColor}`} />
              <span>{activity}</span>
            </li>
          ))}
        </ul>

        {session.homework && (
          <div className="mt-2 pt-1.5 border-t border-dashed border-slate-200">
            <div className="flex items-center gap-1 mb-0.5">
              <BookOpen size={9} className="text-slate-400" />
              <span className="text-[8.5px] font-bold text-slate-500 uppercase">Homework</span>
            </div>
            <p className="text-[10px] text-slate-500 italic leading-snug">
              {session.homework}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};