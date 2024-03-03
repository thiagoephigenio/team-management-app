import { TeamModel } from '../models/Team';

export interface FetchTeams {
  fetch: () => Promise<TeamModel[]>;
}