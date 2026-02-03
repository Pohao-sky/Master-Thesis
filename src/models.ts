export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface MethodStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface MetricCard {
  label: string;
  value: string;
  description: string;
  highlight: boolean;
}

export interface KeyVariable {
  name: string;
  description: string;
}

export interface ReferenceItem {
  id: number;
  authors: string;
  year: string;
  title: string;
  source: string;
  url?: string;
}

export interface ReferenceSection {
  title: string;
  items: ReferenceItem[];
}