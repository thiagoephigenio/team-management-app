import { DeleteTeam } from '../../domain/useCases/DeleteTeam';
import { TeamRepository } from '../protocols/TeamRepository';

export class DeleteTeamUseCase implements DeleteTeam {
  private readonly teamRepository;

  constructor(teamRepository: TeamRepository) {
    this.teamRepository = teamRepository;
  }

  public async delete(teamId: string): Promise<void>{
    return this.teamRepository.delete(teamId);
  };
}