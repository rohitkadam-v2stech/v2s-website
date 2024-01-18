export type TCaseStudyData = {
  id?: number;
  caseName?: string;
  country?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  flag?: string;
  startYear?: number;
  endYear?: number | null;
  isProjectOngoing?: boolean;
  minTeamSize?: number;
  maxTeamSize?: number;
  valueProposition?: ValueProposition[];
  aboutClient?: string;
  projectRevenue?: number;
  projectDuration?: number;
  problemStatement?: ProblemStatement;
  solution?: string[];
  ongoingValueBasedRelationship?: string[];
};

export type ProblemStatement = {
  main?: null | string;
  subProblemStatements?: string[];
  subProblemStatement?: string[];
};

export type ValueProposition = {
  title?: Title;
  details?: string[];
};

export type Title =
  | "Time Impact"
  | "Opportunity Impact"
  | "Productivity Impact"
  | "Financial Impact"
  | "Oppurtunity Impact";
