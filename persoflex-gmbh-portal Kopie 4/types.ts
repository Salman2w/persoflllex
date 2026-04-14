export interface Job {
  id: string;
  title: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Minijob';
  location: string;
  category: string;
  description: string;
  benefits: string[];
}

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}