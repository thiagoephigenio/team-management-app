import { TeamModel } from '../../domain/models/Team';
import { CreateTeamModel } from '../../domain/useCases/CreateTeam';

export interface CreateTeamRepository {
  add : (team: CreateTeamModel) => Promise<TeamModel>
}