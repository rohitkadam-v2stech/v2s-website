export type TCaseStudiesDetailsScreen = {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  flag?: string;
  startYear?: number;
  endYear?: number | null;
  isProjectOngoing?: boolean;
  minTeamSize?: number;
  maxTeamSize?: number;
  aboutClient?: string;
  projectRevenue?: number;
  projectDuration?: number;
  problemStatement?: TProblemStatement;
  solution?: string[];
  ongoingValueBasedRelationship?: string[];
};

export type TProblemStatement = {
  main?: null | string;
  subProblemStatements?: string[];
};
