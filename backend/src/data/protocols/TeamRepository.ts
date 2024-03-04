import { TeamModel } from '../../domain/models/Team';
import { CreateTeamModel } from '../../domain/useCases/CreateTeam';

export interface TeamRepository {
  add : (team: CreateTeamModel) => Promise<TeamModel>;
  delete : (teamId: string) => Promise<void>;
  fetch: () => Promise<TeamModel[]>;
  findById: (teamId: string) => Promise<TeamModel>;
}