import { CoworkerModel } from '../../domain/models/Coworker';
import { DeleteTeam } from '../../domain/useCases/DeleteTeam';
import { CoworkerRepository } from '../protocols/CoworkerRepository';
import { TeamRepository } from '../protocols/TeamRepository';

export class DeleteTeamUseCase implements DeleteTeam {
  private readonly teamRepository;
  private readonly coworkerRepository;

  constructor(teamRepository: TeamRepository, coworkerRepository: CoworkerRepository) {
    this.teamRepository = teamRepository;
    this.coworkerRepository = coworkerRepository;
  }

  public async delete(teamId: string): Promise<void>{
    const coworkers = await this.coworkerRepository.findByTeam(teamId);

    if (coworkers.length) {
      throw new Error('DELETION_ERROR')
    }
    return this.teamRepository.delete(teamId);
  };
}