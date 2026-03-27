import React from 'react';
import { SessionData } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

interface SessionCardProps {
  session: SessionData;
  colorClass: string;
  borderColorClass: string;
  textColorClass: string;
  isLast?: boolean;
}

const SessionCard: React.FC<SessionCardProps> = ({ session, colorClass, borderColorClass, textColorClass, isLast }) => {
  const Icon = session.icon;

  return (
    <div className="flex-1 flex items-stretch relative group">
      {/* The Card */}
      <div className={`flex-1 flex flex-col bg-white rounded-xl shadow-sm border ${borderColorClass} p-2.5 relative z-10 hover:shadow-md transition-shadow`}>
        
        {/* Header */}
        <div className="flex items-start gap-2 mb-1.5 pb-1.5 border-b border-gray-100">
          <div className={`p-1.5 rounded-lg text-white shadow-sm ${colorClass} mt-0.5`}>
            <Icon size={14} strokeWidth={2.5} />
          </div>
          <div>
            <div className={`text-[9px] font-bold uppercase tracking-widest opacity-80 ${textColorClass}`}>
              Session {session.id}
            </div>
            <h4 className="text-[12px] font-serif font-bold text-brand-navy leading-tight">
              {session.title}
            </h4>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-between gap-2">
          {/* Activities */}
          <ul className="space-y-1">
            {session.activities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-[10.5px] text-brand-text leading-tight">
                <Check size={11} className={`shrink-0 mt-0.5 ${textColorClass}`} />
                <span>{activity}</span>
              </li>
            ))}
          </ul>

          {/* Homework Bubble */}
          {session.homework && (
            <div className={`mt-auto rounded-lg p-1.5 ${colorClass.replace('bg-', 'bg-opacity-10 bg-')}`}>
              <div className="flex items-start gap-1.5">
                <span className={`text-[9px] font-bold uppercase tracking-wider ${textColorClass} shrink-0 mt-0.5`}>Goal:</span>
                <span className="text-[10px] text-brand-navy italic font-medium leading-tight">{session.homework}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Connector Arrow (if not last in row) */}
      {!isLast && (
        <div className="w-6 flex items-center justify-center relative z-0">
          <ArrowRight className={`${textColorClass} opacity-40`} size={20} />
        </div>
      )}
    </div>
  );
};

export default SessionCard;