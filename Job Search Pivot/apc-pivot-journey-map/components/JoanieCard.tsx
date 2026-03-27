import React from 'react';
import { Sparkles, FileText, ArrowRight } from 'lucide-react';

const JoanieCard: React.FC = () => {
  return (
    <div className="bg-brand-blue/10 border-2 border-brand-blue/20 rounded-xl p-3 relative overflow-hidden">
       {/* Decorative BG Icon */}
       <Sparkles className="absolute -right-4 -top-4 text-brand-blue/10" size={70} />

       <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
             <div className="bg-brand-blue text-white p-1.5 rounded-md shadow-sm">
                <FileText size={14} />
             </div>
             <div>
               <h4 className="font-serif font-bold text-brand-navy text-[13px] leading-tight">Materials Specialist</h4>
               <p className="text-[9px] text-brand-blue font-bold uppercase tracking-wider">Meet Joanie</p>
             </div>
          </div>
          
          <p className="text-[10px] text-brand-text mb-2 leading-relaxed font-medium">
            Mid-journey, you'll partner with Joanie to transform your insights into powerful documents.
          </p>

          <div className="space-y-1.5">
            {[
                "Resume Tailoring",
                "Cover Letter Strategy",
                "LinkedIn Optimization"
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/60 p-1.5 rounded-md border border-brand-blue/10">
                    <ArrowRight size={10} className="text-brand-blue" />
                    <span className="text-[10px] text-brand-navy font-semibold">{item}</span>
                </div>
            ))}
          </div>
          
          <div className="mt-2 pt-2 border-t border-brand-blue/20 text-[9px] text-brand-textLight italic text-center">
            Integrated seamlessly during Phase 2
          </div>
       </div>
    </div>
  );
};

export default JoanieCard;