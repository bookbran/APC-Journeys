import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

export const JoanieSidebar: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-apc-bg border border-apc-blue rounded-lg shadow-sm flex flex-col overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-apc-blue opacity-50"></div>
        
        <div className="p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
                <div className="p-1 bg-apc-blue/10 rounded-full text-apc-blue">
                    <FileText size={14} />
                </div>
                <h3 className="font-serif font-bold text-apc-navy text-[13px]">Meet Joanie</h3>
            </div>
            
            <p className="text-[9.5px] text-apc-textLight leading-snug mb-2 border-l-2 border-apc-blue pl-2">
                Our materials specialist joins your team right away and stays available throughout your search.
            </p>

            <div className="bg-apc-blue/5 rounded-md p-2 mb-2 border border-apc-blue/10">
                <ul className="space-y-1">
                    {[
                        "Resume development & tailoring",
                        "Cover letter creation",
                        "Ongoing application support",
                        "1–2 dedicated sessions with you"
                    ].map((item, i) => (
                        <li key={i} className="text-[9.5px] text-apc-navy font-medium flex items-start gap-1.5">
                            <Sparkles size={10} className="text-apc-blue mt-0.5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-[9px] text-apc-textLight italic leading-tight text-center px-1">
                Your coach and Joanie coordinate so your materials, story, and LinkedIn all reinforce each other.
            </div>
        </div>
    </div>
  );
};