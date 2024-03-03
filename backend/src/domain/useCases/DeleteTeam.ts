export interface DeleteTeam {
  delete: (teamId: string) => Promise<void>;
}