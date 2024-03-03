import { TeamModel } from '../../domain/models/Team';
import { FetchTeams } from '../../domain/useCases/FetchTeams';
import { TeamRepository } from '../protocols/TeamRepository';

export class FetchTeamsUseCase implements FetchTeams {
  private readonly teamRepository: TeamRepository;

  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  async fetch(): Promise<TeamModel[]> {
    return this.teamRepository.fetch();
  }
}
