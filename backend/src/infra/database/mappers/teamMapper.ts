import { TeamModel } from '../../../domain/models/Team';
import { TeamDbModel } from '../models/TeamDbModel';

export const teamMapper = (team: TeamDbModel): TeamModel => ({
  id: team._id,
  name: team.name
});
