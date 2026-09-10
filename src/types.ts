export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext?: string;
  source?: string;
}

export interface FrameworkStage {
  step: number;
  name: string;
  tagline: string;
  description: string;
  tactics: string[];
  metrics: string[];
  icon: string;
}

export interface ProjectResult {
  metric: string;
  label: string;
  highlight?: boolean;
}

export interface FunnelStep {
  stage: string;
  title: string;
  action: string;
  result: string;
}

export interface CaseStudyProject {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  timeline: string;
  results: ProjectResult[];
  visualEvidence: {
    badge: string;
    headline: string;
    chartType: 'daneng-funnel' | 'xwonbet-surge';
    dataPoints: { label: string; value: string }[];
    highlightValue: string;
    highlightLabel: string;
  };
  // Detailed story for the dedicated case study modal/drawer
  fullStory: {
    summary: string;
    theChallenge: string;
    theStrategy: string;
    funnelExecution: FunnelStep[];
    verifiedMetrics: { label: string; value: string; detail: string }[];
    keyTakeaways: string[];
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  focusArea: string;
}

