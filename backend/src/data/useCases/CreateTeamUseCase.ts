import { TeamModel } from '../../domain/models/Team';
import { CreateTeam, CreateTeamModel } from '../../domain/useCases/CreateTeam';
import { CreateTeamRepository } from '../protocols/CreateTeamRepository';

export class CreateTeamUseCase implements CreateTeam {
  private readonly createTeamRepository: CreateTeamRepository;

  constructor(createTeamRepository: CreateTeamRepository) {
    this.createTeamRepository = createTeamRepository;
  }

  async create(team: CreateTeamModel): Promise<TeamModel> {
    const result = await this.createTeamRepository.add(team);

    return result;
  };

}