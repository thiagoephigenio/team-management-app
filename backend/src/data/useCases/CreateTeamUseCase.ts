import { TeamModel } from '../../domain/models/Team';
import { CreateTeam, CreateTeamModel } from '../../domain/useCases/CreateTeam';
import { TeamRepository } from '../protocols/TeamRepository';

export class CreateTeamUseCase implements CreateTeam {
  private readonly teamRepository: TeamRepository;

  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  async create(team: CreateTeamModel): Promise<TeamModel> {
    const result = await this.teamRepository.add(team);

    return result;
  };

}