import React, { useState } from 'react';
import {
  Headphones, ClipboardList, MessageCircle, HelpCircle,
  Users, ArrowRight, AlertTriangle, DollarSign, Mail,
  ChevronRight, Lightbulb, Heart, Search, Clock, Map, Sparkles
} from 'lucide-react';
import {
  callFlowSteps, keyQuestions, situationRoutes, coaches,
  avoidList, pricingData, feeResponseFlow, journeys, type Journey
} from './data';

type Tab = 'guide' | 'journeys' | 'templates';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('guide');

  return (
    <div className="min-h-screen bg-apc-bg font-sans text-apc-text">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="h-1 w-full bg-gradient-to-r from-apc-navy via-apc-purple to-apc-orange"></div>
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://www.aportlandcareer.com/wp-content/uploads/2020/06/APC-Logo-trans.png"
              alt="A Portland Career"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="font-serif font-bold text-lg text-apc-navy leading-tight">
                Inquiry Call Guide
              </h1>
              <p className="text-xs text-apc-textLight">
                A reference for doing great first calls
              </p>
            </div>
          </div>
          <nav className="flex gap-1">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'guide'
                  ? 'bg-apc-navy text-white'
                  : 'text-apc-textLight hover:bg-slate-100'
              }`}
            >
              The Guide
            </button>
            <button
              onClick={() => setActiveTab('journeys')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'journeys'
                  ? 'bg-apc-navy text-white'
                  : 'text-apc-textLight hover:bg-slate-100'
              }`}
            >
              Journey Maps
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'templates'
                  ? 'bg-apc-navy text-white'
                  : 'text-apc-textLight hover:bg-slate-100'
              }`}
            >
              Email Templates
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === 'guide' && <GuideContent />}
        {activeTab === 'journeys' && <JourneysContent />}
        {activeTab === 'templates' && <TemplatesContent />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-xs text-slate-400">
          <span>&copy; A Portland Career</span>
          <span className="font-medium text-apc-blue">www.aportlandcareer.com</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="mt-0.5 w-9 h-9 rounded-lg bg-apc-navy/5 flex items-center justify-center text-apc-navy shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="font-serif font-bold text-xl text-apc-navy">{title}</h2>
        {subtitle && <p className="text-sm text-apc-textLight mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-6 ${className}`}>
      {children}
    </div>
  );
}

function GuideContent() {
  return (
    <div className="space-y-10">

      {/* Section 1: Your Role */}
      <section>
        <SectionHeading
          icon={<Heart size={18} />}
          title="Your Role on This Call"
          subtitle="The mindset that makes inquiry calls work"
        />
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "Listen first, guide second",
                detail: "You're not selling anything. You're understanding someone's situation so you can point them in the right direction."
              },
              {
                label: "Be yourself",
                detail: "Your authenticity is the thing that makes this work. Show up as you, not as a script."
              },
              {
                label: "You don't need all the answers",
                detail: "\"That's a great question — let me look into that and get back to you\" is always a good answer."
              },
              {
                label: "Stand up and move",
                detail: "When you can't see someone's face, moving your body activates the part of your brain that reads people. Walk around your office during the call."
              },
              {
                label: "Watch your talk time",
                detail: "If the caller asks about you, keep it brief. They should be doing most of the talking."
              },
              {
                label: "Lean on the team",
                detail: "You have an experienced team behind you. You don't have to perform — consult with Dan on coach fit anytime."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-apc-orange shrink-0"></div>
                <div>
                  <p className="font-medium text-sm text-apc-navy">{item.label}</p>
                  <p className="text-sm text-apc-textLight mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Section 2: Before the Call */}
      <section>
        <SectionHeading
          icon={<ClipboardList size={18} />}
          title="Before the Call"
          subtitle="A few minutes of prep makes all the difference"
        />
        <Card>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-orange/10 text-apc-orange flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Read their intake note</p>
                <p className="text-sm text-apc-textLight">They fill out a form when scheduling that includes what they want to talk about. This is your opening — review it before you dial.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-orange/10 text-apc-orange flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Pull up their LinkedIn</p>
                <p className="text-sm text-apc-textLight">Look for career trajectory, interesting overlaps, shared connections, or anything you can reference early in the conversation. Sometimes they'll share portfolio pieces there too.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-orange/10 text-apc-orange flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Have your notes visible</p>
                <p className="text-sm text-apc-textLight">Keep the intake note and LinkedIn open when the call starts so you can reference specifics naturally.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Section 3: The Call Flow */}
      <section>
        <SectionHeading
          icon={<MessageCircle size={18} />}
          title="The Call Flow"
          subtitle="A natural arc, not a script — typically 10–15 minutes"
        />
        <Card className="!p-0 overflow-hidden">
          <div className="divide-y divide-slate-100">
            {callFlowSteps.map((step) => (
              <div key={step.step} className="flex gap-4 p-4 hover:bg-slate-50/50 transition-colors">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{
                    backgroundColor: step.step <= 2 ? '#f26727' : step.step <= 4 ? '#54558e' : step.step <= 6 ? '#16163f' : '#2DA3CB'
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <p className="font-medium text-sm text-apc-navy">{step.title}</p>
                  <p className="text-sm text-apc-textLight mt-0.5 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="mt-3 bg-apc-purple/5 border border-apc-purple/15 rounded-lg px-4 py-3">
          <p className="text-sm text-apc-purple flex items-start gap-2">
            <Lightbulb size={16} className="shrink-0 mt-0.5" />
            <span>
              <strong>The transition from listening to guiding:</strong> You'll feel the moment when the caller knows you get it. That's when you shift from reflecting to recommending. Don't rush it — confirming understanding is the foundation.
            </span>
          </p>
        </div>
      </section>

      {/* Section 4: Key Questions */}
      <section>
        <SectionHeading
          icon={<HelpCircle size={18} />}
          title="Questions That Tell You What You Need to Know"
          subtitle="In priority order — timeline first, then direction, then pressure, then applications"
        />
        <div className="space-y-3">
          {keyQuestions.map((q, i) => (
            <Card key={i} className="!p-4">
              <div className="flex gap-3 items-start">
                <Search size={16} className="text-apc-orange shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-apc-orange bg-apc-orange/10 px-2 py-0.5 rounded-full">
                      {q.priority}
                    </span>
                  </div>
                  <p className="font-serif font-bold text-apc-navy text-sm">{q.question}</p>
                  <p className="text-sm text-apc-textLight mt-1 flex items-start gap-1.5">
                    <ArrowRight size={13} className="shrink-0 mt-0.5 text-apc-purple" />
                    {q.whatItTellsYou}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-3 bg-apc-orange/5 border border-apc-orange/15 rounded-lg px-4 py-3">
          <p className="text-sm text-apc-orange flex items-start gap-2">
            <Lightbulb size={16} className="shrink-0 mt-0.5" />
            <span>
              <strong>Timeline is the gate, not the fee.</strong> Even an Explorer-fit candidate won't do well in exploration sessions if they need a job in weeks. If their timeline rules out Explorer, name it kindly and route to Pivot or Advancing — Emily is a strong fit when someone needs job search now.
            </span>
          </p>
        </div>
      </section>

      {/* Section 5: Situation → Journey → Coach */}
      <section>
        <SectionHeading
          icon={<Users size={18} />}
          title="Situation → Journey → Coach"
          subtitle="Match what you're hearing to the right pathway and person"
        />
        <div className="space-y-2">
          {situationRoutes.map((route, i) => (
            <Card key={i} className="!p-4">
              <div className="flex flex-col md:flex-row md:items-start gap-3">
                <div className="flex-1">
                  <p className="font-medium text-sm text-apc-navy">{route.situation}</p>
                  <p className="text-xs text-apc-textLight mt-1 italic">{route.signal}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <ChevronRight size={14} className="text-slate-300 hidden md:block" />
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                    style={{ backgroundColor: route.journeyColor }}
                  >
                    {route.journey}
                  </span>
                  <ChevronRight size={14} className="text-slate-300" />
                  <span className="text-sm font-medium text-apc-navy whitespace-nowrap">{route.coaches}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 6: Team Profiles */}
      <section>
        <SectionHeading
          icon={<Headphones size={18} />}
          title="The Team"
          subtitle="Who's who and what they're best at"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {coaches.map((coach, i) => (
            <Card key={i} className="!p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-serif font-bold text-apc-navy text-sm">{coach.name}</p>
                  <p className="text-xs text-apc-textLight">{coach.title}</p>
                </div>
                <span className="text-xs font-bold text-apc-orange bg-apc-orange/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {coach.rate}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {coach.specialties.map((s, j) => (
                  <span key={j} className="text-[10px] font-medium bg-apc-navy/5 text-apc-navy px-2 py-0.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-sm text-apc-textLight leading-relaxed">{coach.bestFor}</p>
              {coach.note && (
                <p className="text-xs text-apc-purple mt-2 italic">{coach.note}</p>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section>
        <SectionHeading
          icon={<DollarSign size={18} />}
          title="Pricing Quick Reference"
          subtitle="The fee is information, not a gate. Mention it after the pathway lands."
        />
        <Card className="!p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-apc-navy/5 text-left">
                <th className="px-4 py-2.5 font-medium text-apc-navy">Coach / Service</th>
                <th className="px-4 py-2.5 font-medium text-apc-navy">Rate</th>
                <th className="px-4 py-2.5 font-medium text-apc-navy">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pricingData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-4 py-2.5 text-apc-text">{row.name}</td>
                  <td className="px-4 py-2.5 font-bold text-apc-orange">{row.rate}</td>
                  <td className="px-4 py-2.5 text-apc-textLight">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      {/* Section 7b: Fee Response Flow */}
      <section>
        <SectionHeading
          icon={<DollarSign size={18} />}
          title="When the Fee Comes Up"
          subtitle="A few patterns that tend to show up — and how to meet them"
        />
        <div className="space-y-3">
          {feeResponseFlow.map((row, i) => (
            <Card key={i} className="!p-4">
              <p className="font-serif font-bold text-sm text-apc-navy">{row.scenario}</p>
              <p className="text-sm text-apc-textLight mt-1">{row.approach}</p>
              <div className="mt-3 bg-apc-purple/5 border-l-4 border-apc-purple rounded-r-md px-3 py-2">
                <p className="text-xs uppercase tracking-wider text-apc-purple/70 font-bold mb-1">Try saying</p>
                <p className="text-sm text-apc-navy italic">{row.example}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-3 bg-apc-blue/5 border border-apc-blue/15 rounded-lg px-4 py-3">
          <p className="text-sm text-apc-navy flex items-start gap-2">
            <Lightbulb size={16} className="shrink-0 mt-0.5 text-apc-blue" />
            <span>
              <strong>On sliding scale:</strong> Only offer it when there's a clear financial signal. The default is full rate. We don't want to lead with a discount — that frames the work as cheaper than it is. But for clients in a tough spot, the scale is real and meaningful.
            </span>
          </p>
        </div>
      </section>

      {/* Section 8: What to Avoid */}
      <section>
        <SectionHeading
          icon={<AlertTriangle size={18} />}
          title="What to Avoid"
          subtitle="Common pitfalls and how to sidestep them"
        />
        <div className="space-y-2">
          {avoidList.map((item, i) => (
            <Card key={i} className="!p-4">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle size={12} />
                </div>
                <div>
                  <p className="font-medium text-sm text-apc-navy">{item.title}</p>
                  <p className="text-sm text-apc-textLight mt-0.5">{item.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}

function JourneyTabButton({
  journey, isActive, onClick,
}: { journey: Journey; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-1 px-4 py-3 text-left rounded-lg border transition-all ${
        isActive
          ? 'border-transparent shadow-sm text-white'
          : 'border-slate-200 bg-white hover:border-apc-navy/30 text-apc-navy'
      }`}
      style={isActive ? { backgroundColor: journey.badgeColor } : undefined}
    >
      <p className="font-serif font-bold text-sm leading-tight">{journey.name}</p>
      <p
        className={`text-[11px] mt-0.5 ${
          isActive ? 'text-white/85' : 'text-apc-textLight'
        }`}
      >
        {journey.sessionCount}
      </p>
    </button>
  );
}

function JourneyDetail({ journey }: { journey: Journey }) {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-1">
            <span
              className="inline-block text-[10px] font-bold tracking-widest uppercase text-white px-2.5 py-1 rounded-full mb-2"
              style={{ backgroundColor: journey.badgeColor }}
            >
              {journey.sessionCount}
            </span>
            <h3 className="font-serif font-bold text-2xl text-apc-navy">{journey.name}</h3>
            <p className="font-serif italic text-sm text-apc-orange mt-1">{journey.tagline}</p>
            <p className="text-sm text-apc-textLight mt-3 leading-relaxed">{journey.description}</p>
            <p className="text-xs text-apc-textLight mt-3">
              <span className="font-medium text-apc-navy">Recommended coaches:</span> {journey.recommendedCoaches}
            </p>
          </div>
          <div className="md:w-72 shrink-0 space-y-2">
            <div className="bg-emerald-50/40 border border-emerald-100 rounded-lg p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Best fit when
              </p>
              <ul className="space-y-0.5">
                {journey.bestFor.map((item, i) => (
                  <li key={i} className="text-xs text-apc-navy leading-snug">· {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50/40 border border-amber-100 rounded-lg p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-apc-orange mb-1">
                Probably not when
              </p>
              <ul className="space-y-0.5">
                {journey.notIdealWhen.map((item, i) => (
                  <li key={i} className="text-xs text-apc-navy leading-snug">· {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Phases */}
      <div className="space-y-5">
        {journey.phases.map((phase) => (
          <div key={phase.id}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: phase.color }}
              >
                {phase.id}
              </div>
              <div>
                <p className="font-serif font-bold text-apc-navy">{phase.name}</p>
                <p className="text-xs text-apc-textLight">{phase.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {phase.sessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <div className="h-1 w-full" style={{ backgroundColor: phase.color }} />
                  <div className="p-4">
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: phase.color }}
                    >
                      Session {session.id}
                    </p>
                    <h4 className="font-serif font-bold text-sm text-apc-navy mt-0.5 leading-tight">
                      {session.title}
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {session.activities.map((activity, i) => (
                        <li key={i} className="text-xs text-apc-textLight leading-snug pl-3 relative">
                          <span
                            className="absolute left-0 top-0 font-bold"
                            style={{ color: phase.color }}
                          >
                            ›
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                    {session.homework ? (
                      <div className="mt-2 pt-2 border-t border-dashed border-slate-200">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-apc-navy/60">
                          Between sessions
                        </p>
                        <p className="text-xs text-apc-textLight italic mt-0.5 leading-snug">
                          {session.homework}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneysContent() {
  const [activeJourney, setActiveJourney] = useState<Journey['key']>('explorer');
  const journey = journeys.find((j) => j.key === activeJourney) ?? journeys[0];

  return (
    <div className="space-y-8">
      {/* Intro / how to use */}
      <section>
        <SectionHeading
          icon={<Map size={18} />}
          title="Journey Maps"
          subtitle="Have these visible during the call to talk clients through what working with us looks like"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Card className="!p-4">
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-lg bg-apc-orange/10 text-apc-orange flex items-center justify-center shrink-0">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Journeys are flexible</p>
                <p className="text-xs text-apc-textLight mt-0.5">
                  Some pieces matter more for some clients than others — that's by design. Use the map
                  as a guide for the conversation, not a script.
                </p>
              </div>
            </div>
          </Card>
          <Card className="!p-4">
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-lg bg-apc-blue/10 text-apc-blue flex items-center justify-center shrink-0">
                <Map size={16} />
              </div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Use them on the call</p>
                <p className="text-xs text-apc-textLight mt-0.5">
                  Pull up the right tab when you're recommending a pathway. Walk them through phase by
                  phase so they can picture the work, not just hear about it.
                </p>
              </div>
            </div>
          </Card>
          <Card className="!p-4">
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-lg bg-apc-purple/10 text-apc-purple flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Don't email them out</p>
                <p className="text-xs text-apc-textLight mt-0.5">
                  Sending the map cold misses the context. The assigned coach will share it after their
                  first conversation, when it can land in the right frame.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <div className="flex flex-col md:flex-row gap-2 mb-5">
          {journeys.map((j) => (
            <JourneyTabButton
              key={j.key}
              journey={j}
              isActive={activeJourney === j.key}
              onClick={() => setActiveJourney(j.key)}
            />
          ))}
        </div>
        <JourneyDetail journey={journey} />
      </section>

      {/* Footer reminder */}
      <section>
        <div className="bg-apc-navy/5 border border-apc-navy/10 rounded-lg px-4 py-4">
          <p className="text-sm text-apc-navy flex items-start gap-2">
            <Lightbulb size={16} className="shrink-0 mt-0.5 text-apc-orange" />
            <span>
              <strong>Joanie works in parallel for every track.</strong> If materials are part of what they
              need (likely on Pivot and Advancing), Joanie picks up resume, cover letter, and LinkedIn work
              alongside the coach. On Explorer, materials show up later, after direction is clearer.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

function TemplatesContent() {
  return (
    <div className="space-y-10">
      <section>
        <SectionHeading
          icon={<Mail size={18} />}
          title="Follow-Up Email Structure"
          subtitle="The anatomy of a good introduction email"
        />
        <Card>
          <p className="text-sm text-apc-textLight mb-4">
            After the call, capture your notes right away — do a voice recording brain dump of everything you remember, then use an AI tool (Claude, ChatGPT) to condense it into a structured draft. Then edit heavily to make it sound like you.
          </p>
          <div className="bg-apc-bg rounded-lg p-5 border border-slate-200">
            <p className="text-xs font-bold text-apc-navy uppercase tracking-wide mb-3">Email Structure</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-apc-navy">1. Warm greeting to the coach</p>
                <p className="text-sm text-apc-textLight">Brief intro of the client — first name, how they came to us.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-apc-navy">2. Situation summary</p>
                <p className="text-sm text-apc-textLight">A concise overview of what the client shared on the call: where they are, what they're facing, what they're looking for. Written with warmth and care — this is how the coach will first understand the client.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-apc-navy">3. Why this pathway</p>
                <p className="text-sm text-apc-textLight">A sentence or two about why you think this particular journey or approach is the right fit based on the conversation.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-apc-navy">4. What the client is expecting</p>
                <p className="text-sm text-apc-textLight">Confirm what you told the client about next steps — that they'll hear from the coach to schedule a free 15-minute conversation.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-apc-navy">5. CC the client</p>
                <p className="text-sm text-apc-textLight">The client is on the email so they can see the handoff and respond directly to the coach.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <SectionHeading
          icon={<Clock size={18} />}
          title="The Post-Call Process"
          subtitle="What to do right after you hang up"
        />
        <Card>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-purple/10 text-apc-purple flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Brain dump immediately</p>
                <p className="text-sm text-apc-textLight">Do a voice recording right after the call. Spit out everything you remember — it'll be messy, and that's fine. This is your raw material.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-purple/10 text-apc-purple flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Use AI to draft the intro email</p>
                <p className="text-sm text-apc-textLight">Feed your notes into Claude or ChatGPT to condense into the email structure above. This gives you a fast starting point.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-purple/10 text-apc-purple flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Edit heavily</p>
                <p className="text-sm text-apc-textLight">The AI draft won't sound like you. Rewrite it in your own voice — it's a head start, not a finished product.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-apc-purple/10 text-apc-purple flex items-center justify-center text-xs font-bold shrink-0">4</div>
              <div>
                <p className="font-medium text-sm text-apc-navy">Send within your promised window</p>
                <p className="text-sm text-apc-textLight">You told the caller when they'd hear from you — honor that. If you said 20 minutes, send it in 20 minutes.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="bg-apc-navy/5 border-dashed">
          <div className="text-center py-4">
            <Mail size={24} className="mx-auto text-apc-navy/30 mb-2" />
            <p className="text-sm font-medium text-apc-navy">Example email templates will be added here</p>
            <p className="text-xs text-apc-textLight mt-1">Dan will provide real examples from past inquiry calls</p>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default App;
