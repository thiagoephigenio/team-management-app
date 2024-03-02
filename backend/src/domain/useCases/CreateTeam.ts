import { TeamModel } from '../models/Team';

export type CreateTeamModel = Pick<TeamModel, 'name'>

export interface CreateTeam {
  create: (team: CreateTeamModel) => Promise<TeamModel>;
}