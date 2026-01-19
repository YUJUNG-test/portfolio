
export interface Competency {
  id: string;
  title: string;
  subtitle: string;
  performance: string;
  insight: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  team: string;
  period: string;
  role: string;
  results: string[];
}

export interface Project {
  title: string;
  tag: string;
  award?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}
