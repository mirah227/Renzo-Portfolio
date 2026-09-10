import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Users,
  Eye,
  TrendingUp,
  Radio,
  MessageSquare,
  Compass,
  UserPlus,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart3,
  MousePointerClick,
  Sparkles
} from 'lucide-react';

interface DanengCaseStudyProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const DanengCaseStudy: React.FC<DanengCaseStudyProps> = ({
  onBack,
  onOpenContact,
}) => {
  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 selection:bg-[#EAA039]/20 selection:text-[#EAA039] relative">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#EAA039]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Sticky Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#EAA039]" />
              <span>Back to Portfolio</span>
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              onClick={onBack}
              className="hidden sm:flex items-center focus:outline-none cursor-pointer group"
              aria-label="Return to portfolio home"
            >
              <span className="font-display font-extrabold text-sm tracking-widest text-white group-hover:text-[#EAA039] transition-colors uppercase">
                RENZO<span className="text-[#EAA039]">.</span>
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
              Case Study · Verified Analytics
            </span>
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        {/* =========================================================
            HEADER & COMPACT OVERVIEW
        ========================================================= */}
        <header className="space-y-8">
          {/* Breadcrumb & Identifier */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/25 text-[#EAA039] font-bold tracking-wider uppercase">
              Case Study
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">DANENG AI</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">User Acquisition & Community</span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              DANENG AI
            </h1>
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#EAA039] tracking-tight">
              Growth & Community Management
            </p>
          </div>

          {/* Compact Overview Bar at the Top */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {/* Role */}
            <div className="space-y-1.5 sm:pr-4">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Role
              </div>
              <div className="font-display text-base sm:text-lg font-bold text-white">
                Marketing & Community Growth
              </div>
            </div>

            {/* Focus */}
            <div className="pt-4 sm:pt-0 sm:pl-6 space-y-1.5">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Focus
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-[#EAA039]">
                Social Growth · Community · Traffic · User Acquisition
              </div>
            </div>
          </div>
        </header>

        {/* =========================================================
            01 — THE OBJECTIVE
        ========================================================= */}
        <section id="section-01" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              01 — THE OBJECTIVE
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Beyond Surface-Level Social Numbers
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              <p>
                The primary objective was not simply to increase impressions, accumulate vanity reposts, or inflate arbitrary social figures.
              </p>
              <p>
                The focus was to drive targeted attention toward <strong className="text-white font-semibold">DANENG AI</strong>, systematically move that attention away from rented social feeds and onto the platform, and convert genuine interest into <strong className="text-[#EAA039] font-semibold">actual registered users</strong>.
              </p>
            </div>

            {/* Visual Callout Bar */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="text-white font-medium">Core Intent:</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300">
                High-Intent Attention
              </span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300">
                On-Site Traffic
              </span>
              <span>→</span>
              <span className="px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/25 text-[#EAA039] font-bold">
                Registered Accounts
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            02 — STARTING POINT
        ========================================================= */}
        <section id="section-02" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              02 — STARTING POINT
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Highlight Card of Initial Position */}
            <div className="md:col-span-5 p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>INITIAL SOCIAL POSITION</span>
                <span className="text-slate-400">DAY 0 BASELINE</span>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">X Account</div>
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-white mt-1">
                  8
                </div>
                <div className="text-sm font-mono text-[#EAA039] font-semibold mt-1">
                  followers
                </div>
              </div>
              <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/[0.05]">
                Zero existing inbound referral momentum
              </div>
            </div>

            {/* Right: Context Description */}
            <div className="md:col-span-7 space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Context for the Growth That Followed
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                When work began, the project had an X account with just <strong className="text-white font-semibold">8 followers</strong> and no established organic distribution funnel.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Understanding this initial social position provides the necessary context for the scale, velocity, and conversion efficiency of the audience and web traffic generated thereafter.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            03 — WHAT I DID (Separate visual blocks)
        ========================================================= */}
        <section id="section-03" className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              03 — WHAT I DID
            </span>
            <span className="text-xs font-mono text-slate-400">
              5 Core Execution Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Block 1: X Growth */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#EAA039] font-bold px-2 py-0.5 rounded bg-[#EAA039]/10">
                    Week 1 Surge
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  X Growth
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Consistent content, engagement, and targeted outreach helped grow the X account from <strong className="text-white font-semibold">8 followers to 90+</strong> within the first week.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Metric: 8 → 90+ organic followers (Week 1)
              </div>
            </div>

            {/* Block 2: Community Building */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04]">
                    Telegram Hub
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Community Building
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Created and took charge of the Telegram community, focusing on building an active environment around the project.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Role: Community architecture & active moderation
              </div>
            </div>

            {/* Block 3: Content & Engagement */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04]">
                    High Intent
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Content & Engagement
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Developed content and engagement strategies designed to attract people genuinely interested in what DANENG AI was building.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Strategy: Filtering for product interest over vanity reach
              </div>
            </div>

            {/* Block 4: Targeted Outreach */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04]">
                    Awareness
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Targeted Outreach
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Used targeted outreach to increase awareness and bring relevant attention toward the project.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Tactic: Direct ecosystem alignment & relevant audience discovery
              </div>
            </div>

            {/* Block 5: User Acquisition (Span across on md) */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/50 transition-colors flex flex-col justify-between space-y-4 group bg-gradient-to-r from-[#0C0D12] via-[#0F1017] to-[#0C0D12]">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#EAA039]/10 border border-[#EAA039]/30 flex items-center justify-center text-[#EAA039]">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#EAA039] px-2.5 py-1 rounded bg-[#EAA039]/15 border border-[#EAA039]/30">
                    Primary Conversion Focus
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  User Acquisition
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  Focused on moving people beyond social engagement and toward the actual platform. The entire distribution setup was anchored on driving visitors to explore the interface and complete registration.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EAA039]" />
                <span>Resulting outcome: 139 cumulative verified registrations at 4.36% conversion rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 — THE FUNNEL (Visual Journey)
        ========================================================= */}
        <section id="section-04" className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              04 — THE FUNNEL
            </span>
            <span className="text-xs font-mono text-slate-400">
              5-Stage Conversion Flow
            </span>
          </div>

          {/* Visual Journey Architecture */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                The User Journey: Attention to Real Users
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                A structured pathway engineered to prevent social interest from vanishing before product contact.
              </p>
            </div>

            {/* Stepper Flow Cards */}
            <div className="space-y-4">
              {/* Stage 1: ATTENTION */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                    01
                  </span>
                  <span className="font-display text-base font-extrabold text-white tracking-wide uppercase">
                    ATTENTION
                  </span>
                </div>
                <div className="sm:col-span-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Generating targeted curiosity on X and ecosystem channels through consistent content, engagement, and outreach.
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center text-[#EAA039] font-mono text-sm py-0.5">
                ↓
              </div>

              {/* Stage 2: TRAFFIC */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                    02
                  </span>
                  <span className="font-display text-base font-extrabold text-white tracking-wide uppercase">
                    TRAFFIC
                  </span>
                </div>
                <div className="sm:col-span-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Directing interested viewers away from social feeds to the web environment via clear referral links (6,221 total page views).
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center text-[#EAA039] font-mono text-sm py-0.5">
                ↓
              </div>

              {/* Stage 3: PLATFORM EXPLORATION */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                    03
                  </span>
                  <span className="font-display text-base font-extrabold text-white tracking-wide uppercase">
                    PLATFORM EXPLORATION
                  </span>
                </div>
                <div className="sm:col-span-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visitors exploring features and testing platform capabilities with minimal friction (3,189 unique prospective users reached).
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center text-[#EAA039] font-mono text-sm py-0.5">
                ↓
              </div>

              {/* Stage 4: REGISTRATION */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#EAA039]/20 flex items-center justify-center text-xs font-mono font-bold text-[#EAA039]">
                    04
                  </span>
                  <span className="font-display text-base font-extrabold text-[#EAA039] tracking-wide uppercase">
                    REGISTRATION
                  </span>
                </div>
                <div className="sm:col-span-8 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Streamlined conversion flow turning exploratory visits into <strong className="text-white font-semibold">139 registered accounts</strong> at an above-average 4.36% rate.
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center text-[#EAA039] font-mono text-sm py-0.5">
                ↓
              </div>

              {/* Stage 5: REAL USERS */}
              <div className="p-5 rounded-xl bg-[#0F1017] border border-[#EAA039]/40 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center shadow-lg">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#EAA039] flex items-center justify-center text-xs font-mono font-bold text-[#07080B]">
                    05
                  </span>
                  <span className="font-display text-base font-extrabold text-white tracking-wide uppercase">
                    REAL USERS
                  </span>
                </div>
                <div className="sm:col-span-8 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  Active, verified platform accounts that interact with tools and integrate into the ongoing community ecosystem.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 — RESULTS (Large Visual Analytics Section)
        ========================================================= */}
        <section id="section-05" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20 self-start">
              05 — RESULTS
            </span>
            <span className="text-xs font-mono text-slate-400">
              Verified Web & Account Telemetry
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Campaign Performance Analytics
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Exact performance metrics tracked across the DANENG AI campaign.
              </p>
            </div>

            {/* 6 Metric Analytics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Metric 1 */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Total Page Views
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-2 tracking-tight">
                  6,221
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  Cumulative campaign page volume
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Unique Visitors
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-2 tracking-tight">
                  3,189
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  Distinct individuals exploring platform
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Page Views — Last 7 Days
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-2 tracking-tight">
                  1,162
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  Active weekly engagement velocity
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Unique Visitors — Last 7 Days
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-2 tracking-tight">
                  587
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  Weekly inbound unique prospects
                </div>
              </div>

              {/* Metric 5 */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-[#EAA039]/30 flex flex-col justify-between bg-gradient-to-b from-[#EAA039]/[0.05] to-transparent">
                <div className="text-xs font-mono text-[#EAA039] uppercase tracking-wider font-semibold">
                  Cumulative Registrations
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EAA039] my-2 tracking-tight">
                  139
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  Verified registered user accounts
                </div>
              </div>

              {/* Metric 6 */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-[#EAA039]/30 flex flex-col justify-between bg-gradient-to-b from-[#EAA039]/[0.05] to-transparent">
                <div className="text-xs font-mono text-[#EAA039] uppercase tracking-wider font-semibold">
                  Visitor → Registration Conversion
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white my-2 tracking-tight">
                  4.36%
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                  139 registrations / 3,189 unique visitors
                </div>
              </div>
            </div>

            {/* Clean, Non-Fabricated Verification Placeholder Area */}
            <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#EAA039]" />
                <span className="font-semibold uppercase tracking-wider">
                  Verification Data Reference Note
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Telemetry figures sourced directly from DANENG AI’s web analytics dashboard and user registration database logs. To maintain strict reporting integrity, only actual recorded figures are presented.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400 border-t border-white/[0.04]">
                <span>Source: Web Telemetry & Registration Logs</span>
                <span>•</span>
                <span>Conversion Ratio: 4.36% (139 / 3,189)</span>
                <span>•</span>
                <span>Status: Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            06 — WHAT THE NUMBERS SHOW
        ========================================================= */}
        <section id="section-06" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              06 — WHAT THE NUMBERS SHOW
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Proving Attention Converted Beyond Social Media
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              <p>
                The campaign generated website traffic and demonstrated that the attention being generated was <strong className="text-white font-semibold">not stopping at social media</strong>.
              </p>
              <p>
                Visitors were reaching the website, exploring the platform, and <strong className="text-[#EAA039] font-semibold">converting into registered users</strong>.
              </p>
            </div>

            {/* Structured Evidence Takeaways */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs font-mono text-[#EAA039] font-semibold mb-1">
                  1. Real Inbound Traffic
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  3,189 unique visitors reached the portal, proving strong CTR from social discovery channels.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs font-mono text-[#EAA039] font-semibold mb-1">
                  2. Active Exploration
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  6,221 total page views indicates readers explored multiple subpages and platform tools.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs font-mono text-[#EAA039] font-semibold mb-1">
                  3. Verified Conversion
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  139 users created accounts, validating that visitor intent translated into actual platform adoption.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            07 — APPROACH
        ========================================================= */}
        <section id="section-07" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              07 — APPROACH
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-6">
            {/* Simple Visual Statement */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#090A0E] border border-white/[0.08] text-center">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                CORE GROWTH ARCHITECTURE STATEMENT
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg lg:text-xl font-display font-extrabold text-white">
                <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-200">
                  Attention
                </span>
                <span className="text-[#EAA039]">→</span>
                <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-200">
                  Traffic
                </span>
                <span className="text-[#EAA039]">→</span>
                <span className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-200">
                  Conversion
                </span>
                <span className="text-[#EAA039]">→</span>
                <span className="px-3 py-1.5 rounded-md bg-[#EAA039]/15 border border-[#EAA039]/30 text-[#EAA039]">
                  Real Users
                </span>
              </div>
            </div>

            {/* Short Explanation */}
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl space-y-3">
              <p>
                This is the growth approach Renzo aims to deliver: <strong className="text-white font-semibold">measurable, trackable, and connected to actual user activity</strong>.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Rather than treating social impressions and community management as isolated branding activities, every piece of content, outreach channel, and community interaction is structured to feed a clear conversion engine.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            08 — PROJECT LINK
        ========================================================= */}
        <section id="section-08" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              08 — PROJECT LINK
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Platform Access
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Explore DANENG AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                Official web application portal
              </p>
            </div>

            <a
              href="https://daneng.app/r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] shadow-lg transition-all duration-150 cursor-pointer self-start sm:self-auto group"
            >
              <span>Visit daneng.app/r</span>
              <ExternalLink className="w-4 h-4 text-[#07080B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* =========================================================
            BOTTOM NAVIGATION / ACTION FOOTER
        ========================================================= */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#EAA039]" />
            <span>Back to All Case Studies</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer shadow-md"
          >
            <span>Discuss Similar Growth Architecture</span>
            <ArrowRight className="w-4 h-4 text-[#07080B]" />
          </button>
        </div>
      </main>
    </div>
  );
};
