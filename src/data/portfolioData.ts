import { CaseStudyProject, FrameworkStage, MetricItem, NavItem, ServiceItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  tagline: 'GROWTH SYSTEMS · WEB3 & AI · COMMUNITY ARCHITECTURE',
  headline: 'Turning Attention Into Real Users.',
  supportingText:
    'I help Web3 and emerging technology projects turn social attention into measurable traffic, community growth, and active registered users.',
  primaryCta: 'View Case Studies',
  secondaryCta: "Let's Work Together",
  badgeTitle: 'Growth & Community Architect',
  badgeSubtitle: 'COMMUNITY STRATEGY · ON-CHAIN CONVERSION',
  badgeStatus: 'Available for growth & advisory engagements',
};

// SECTION 2: SELECTED WORK (The 2 Core Projects)
export const SELECTED_PROJECTS: CaseStudyProject[] = [
  {
    id: 'daneng-ai',
    name: 'DANENG AI',
    role: 'Growth & Community Management',
    category: 'AI & Web3 Platform',
    description:
      'Engineered the initial go-to-market funnel and community infrastructure, transforming early organic curiosity into registered users.',
    timeline: 'Launch & Expansion Phase',
    results: [
      { metric: '8 → 90+', label: 'X followers in first week' },
      { metric: '6,221', label: 'total page views (3,189 unique)' },
      { metric: '4.36%', label: 'visitor → registration conversion (139 registered)' },
    ],
    visualEvidence: {
      badge: 'VERIFIED CONVERSION FUNNEL',
      headline: 'Traffic to Registered Users Flow',
      chartType: 'daneng-funnel',
      dataPoints: [
        { label: 'Total Page Views', value: '6,221' },
        { label: 'Unique Visitors', value: '3,189' },
        { label: 'Total Registrations', value: '139' },
      ],
      highlightValue: '4.36%',
      highlightLabel: 'Conversion Efficiency',
    },
    fullStory: {
      summary:
        'DANENG AI needed to establish an organic footprint from absolute ground zero without spending large budgets on vanity influencer shoutouts. By executing narrative-driven threads on X, targeted documentation routes, and an interactive onboarding path, the platform acquired verified registered users with an exceptional 4.36% conversion rate.',
      theChallenge:
        'The project started with only 8 followers on X and zero website visitors. In a crowded AI space, the primary danger was receiving empty social impressions that never translated into product usage or account signups.',
      theStrategy:
        'Implemented a tight 3-step loop: educational breakdown threads highlighting real utility on X, structured referral routing directly to the web portal, and an ultra-low-friction registration page that guided users directly into the product core.',
      funnelExecution: [
        {
          stage: 'Attention',
          title: 'Targeted Narrative Threads',
          action: 'Crafted technical breakdown threads highlighting practical AI workflows and direct product demos.',
          result: 'Scaled X audience from 8 to 90+ high-intent followers in 7 days.',
        },
        {
          stage: 'Traffic Routing',
          title: 'Frictionless Inbound Links',
          action: 'Embedded structured deep-links and UTM tags to measure which social posts drove actual reader visits.',
          result: 'Generated 6,221 page views and 3,189 unique visitors.',
        },
        {
          stage: 'Conversion',
          title: 'Onboarding Simplification',
          action: 'Streamlined the signup flow down to 2 clicks, removing non-essential fields.',
          result: 'Captured 139 cumulative registered users at 4.36% conversion rate.',
        },
      ],
      verifiedMetrics: [
        { label: 'X Audience Velocity', value: '8 → 90+', detail: 'Organic followers gained in Week 1' },
        { label: 'Total Page Views', value: '6,221', detail: 'Tracked across campaign landing pages' },
        { label: 'Unique Visitors', value: '3,189', detail: 'Distinct prospective users reached' },
        { label: 'Registered Accounts', value: '139', detail: 'Cumulative verified registrations' },
        { label: 'Funnel Conversion Rate', value: '4.36%', detail: 'Unique visitor to registered user ratio' },
      ],
      keyTakeaways: [
        'Vanity reach does not equal product adoption; structuring clear CTAs from social to registration is paramount.',
        'High-density educational content generates substantially higher visitor intent than generic giveaways.',
        'Auditing onboarding UX alongside content creation unlocks immediate conversion efficiency gains.',
      ],
    },
  },
  {
    id: 'xwonbet',
    name: 'XWONBET',
    role: 'Growth Strategy & Community Management',
    category: 'Web3 Gaming & Prediction',
    description:
      'Executed a high-velocity social acquisition and community activation strategy that drove a ten-fold increase in platform traffic.',
    timeline: 'Campaign Sprints & Scaling',
    results: [
      { metric: '10×', label: 'increase in website traffic' },
      { metric: '100+', label: 'new followers in under two weeks' },
      { metric: 'High-Signal', label: 'organic community engagement & player activation' },
    ],
    visualEvidence: {
      badge: 'TRAFFIC MULTIPLIER AUDIT',
      headline: 'Organic Audience & Web Acceleration',
      chartType: 'xwonbet-surge',
      dataPoints: [
        { label: 'Followers Gained', value: '100+' },
        { label: 'Timeframe', value: '< 14 Days' },
        { label: 'Traffic Expansion', value: '10× Surge' },
      ],
      highlightValue: '10×',
      highlightLabel: 'Traffic Multiplier',
    },
    fullStory: {
      summary:
        'XWONBET operates in the competitive Web3 gaming and prediction market where user acquisition costs are typically prohibitive. By combining community-first narrative campaigns, live event coordination, and strategic ecosystem distribution, the platform achieved a 10× surge in website traffic while growing 100+ new followers in under two weeks.',
      theChallenge:
        'The platform had established core features but struggled with low inbound traffic and stagnant social community engagement. Existing players rarely returned between match cycles, and social media reach lacked momentum.',
      theStrategy:
        'Redesigned the community calendar around prediction events, gamified Twitter Spaces, and responsive Telegram alpha channels that continuously pointed engaged viewers directly onto the gaming platform.',
      funnelExecution: [
        {
          stage: 'Attention',
          title: 'Event-Centric Content',
          action: 'Timed strategic prediction threads and interactive polls to major sports and crypto milestones.',
          result: 'Surpassed 100+ targeted organic followers in less than 14 days.',
        },
        {
          stage: 'Engagement',
          title: 'Community Activation Loops',
          action: 'Created daily prediction challenges inside Telegram that required visiting the platform to participate.',
          result: 'Shifted community from passive readers to active participants.',
        },
        {
          stage: 'Traffic Expansion',
          title: 'Direct Platform Routing',
          action: 'Paired all high-engagement discussion threads with immediate, deep-linked platform access.',
          result: 'Achieved a sustained 10× increase in overall website traffic.',
        },
      ],
      verifiedMetrics: [
        { label: 'Traffic Multiplier', value: '10×', detail: 'Relative expansion in unique web visitors' },
        { label: 'New Followers', value: '100+', detail: 'Acquired in under two weeks without paid ads' },
        { label: 'Community Momentum', value: 'Active Daily', detail: 'Shift from silent followers to active discussions' },
        { label: 'Acquisition Cost', value: '$0 Paid', detail: '100% organic strategy execution' },
      ],
      keyTakeaways: [
        'In Web3 gaming, syncing social content with active platform events creates an immediate incentive to click.',
        'A dedicated community space (Telegram/Discord) provides the connective tissue between social buzz and recurring play.',
        'Continuous organic posting beats sporadic big-budget pushes for sustaining traffic velocity.',
      ],
    },
  },
];

// SECTION 3: IMPACT (Compact large numbers, verified metrics)
export const IMPACT_METRICS: MetricItem[] = [
  {
    id: 'imp-views',
    value: '6,221',
    label: 'Total Page Views',
    subtext: 'DANENG AI Launch',
  },
  {
    id: 'imp-unique',
    value: '3,189',
    label: 'Unique Visitors',
    subtext: 'Inbound organic discovery',
  },
  {
    id: 'imp-traffic',
    value: '10×',
    label: 'Traffic Expansion',
    subtext: 'XWONBET campaign sprint',
  },
  {
    id: 'imp-conversion',
    value: '4.36%',
    label: 'Visitor → Registration',
    subtext: 'Platform conversion rate',
  },
  {
    id: 'imp-followers',
    value: '100+',
    label: 'New Followers',
    subtext: 'In under two weeks',
  },
  {
    id: 'imp-users',
    value: '139',
    label: 'Registered Users',
    subtext: 'Verified account signups',
  },
];

// SECTION 4: SHORT INTRODUCTION (Restrained, no buzzwords)
export const RENZO_INTRO = {
  tagline: 'ABOUT RENZO',
  statement:
    'I operate at the intersection of social attention and real user conversion. Instead of vanity metrics or paid hype, I build disciplined funnels that guide viewers from first impression to verified platform activity.',
  domains: [
    {
      title: 'Growth',
      description: 'Designing end-to-end acquisition funnels from early discovery to active product retention.',
    },
    {
      title: 'Community',
      description: 'Building and moderating high-signal Telegram and Discord environments that encourage real participation.',
    },
    {
      title: 'Social',
      description: 'Engineering high-impact content, threads, and ecosystem positioning across X and decentralized networks.',
    },
    {
      title: 'User Acquisition',
      description: 'Routing organic social curiosity into high-intent web traffic and registered accounts.',
    },
    {
      title: 'Campaigns',
      description: 'Orchestrating synchronized launches, partner spaces, and community momentum sprints.',
    },
  ],
  footerNote: 'Practitioner background in Web3, AI platforms, and emerging digital technology.',
};

// Retain framework stages for deep context
export const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    step: 1,
    name: 'Attention',
    tagline: 'Capturing High-Signal Mindshare',
    description:
      'Cutting through noise with narrative-driven social content, ecosystem positioning, strategic thread architecture, and targeted distribution.',
    tactics: [
      'High-impact narrative threads & hooks on X',
      'Strategic ecosystem co-marketing & spaces',
      'Value-dense educational breakdowns',
      'Trend and narrative capitalization',
    ],
    metrics: ['Reach velocity', 'Profile visits & brand mentions', 'Audience growth'],
    icon: 'Radio',
  },
  {
    step: 2,
    name: 'Engagement',
    tagline: 'Igniting Conversation & Curiosity',
    description:
      'Shifting passive viewers into interactive participants through open dialogue, provocative questions, and responsive community touchpoints.',
    tactics: [
      'Interactive discussions & prompt engineering',
      'Real-time ecosystem founder engagement',
      'Community spotlighting & active replies',
      'Spaces, webinars, and live workshops',
    ],
    metrics: ['Reply-to-impression ratio', 'Quote shares', 'Community sentiment'],
    icon: 'MessageSquareShare',
  },
  {
    step: 3,
    name: 'Traffic',
    tagline: 'Routing Intent to Owned Channels',
    description:
      'Directing engaged interest away from rented social algorithms toward high-converting landing pages, documentation, and product entry points.',
    tactics: [
      'Optimized link structures & dynamic landing portals',
      'Educational hub routes & interactive guides',
      'Targeted campaign tracking links & UTM frameworks',
      'Clean frictionless discovery paths',
    ],
    metrics: ['Click-through rates (CTR)', 'Referral source distribution', 'Bounce rate'],
    icon: 'Navigation',
  },
  {
    step: 4,
    name: 'Conversion',
    tagline: 'Activating Platform Actions',
    description:
      'Designing frictionless onboarding experiences that turn exploratory visitors into registered accounts, active testers, or protocol users.',
    tactics: [
      'Streamlined account creation & onboarding UX',
      'Incentivized early-access milestones',
      'Drop-off audit & micro-copy optimization',
      'Clear progressive disclosure of product value',
    ],
    metrics: ['Account creation', 'Product activation rate', 'Funnel conversion %'],
    icon: 'Zap',
  },
  {
    step: 5,
    name: 'Community',
    tagline: 'Cultivating Long-Term Loyalty',
    description:
      'Cementing users into self-governing, highly collaborative community members who champion the project and drive organic retention.',
    tactics: [
      'Discord & Telegram role progression structures',
      'Ambassador and community champion programs',
      'Community governance calls & alpha sessions',
      'Active retention and peer onboarding workflows',
    ],
    metrics: ['Weekly active community members', 'Organic peer onboarding', 'Community retention'],
    icon: 'Users',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Web3 & AI Social Strategy',
    description:
      'Architecting authoritative content, strategic ecosystem co-marketing, and narrative distribution that captures attention in crowded markets.',
    focusArea: 'Attention & Engagement',
    deliverables: [
      'Narrative & messaging framework alignment',
      'X high-impact content playbooks',
      'Ecosystem partner co-marketing & Spaces hosting',
      'Organic distribution and audience growth',
    ],
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Community Architecture & Moderation',
    description:
      'Designing and managing high-signal Discord and Telegram communities structured for active participation, member progression, and minimal churn.',
    focusArea: 'Community & Retention',
    deliverables: [
      'Discord & Telegram structural hierarchy and onboarding',
      'Ambassador and contributor programs',
      'Community AMAs and alpha discussions',
      'Active retention workflows and moderation',
    ],
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'User Acquisition & Conversion Auditing',
    description:
      'Eliminating friction points between social discovery and on-site action, turning casual curiosity into verified registered users.',
    focusArea: 'Traffic & Conversion',
    deliverables: [
      'Landing page & onboarding UX conversion audits',
      'Signup friction reduction',
      'Campaign attribution & UTM tracking systems',
      'Frictionless user flow design',
    ],
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Campaign Sprints & Growth Automation',
    description:
      'Deploying focused launch sprints, partner co-activations, and automated monitoring to sustain momentum.',
    focusArea: 'Scale & Operations',
    deliverables: [
      'Launch campaign roadmap & coordination',
      'Social monitoring and mention tracking',
      'Community prompt calendars',
      'Performance analytics reporting',
    ],
  },
];

