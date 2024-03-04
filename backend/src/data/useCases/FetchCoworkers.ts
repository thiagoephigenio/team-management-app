import { CoworkerModel } from '../../domain/models/Coworker';
import { CoworkerTeamModel } from '../../domain/models/CoworkerTeam';
import { FetchCoworkers } from '../../domain/useCases/FetchCoworkers';
import { CoworkerRepository } from '../protocols/CoworkerRepository';
import { TeamRepository } from '../protocols/TeamRepository';

export class FetchCoworkersUseCase implements FetchCoworkers {
  private readonly coworkerRepository: CoworkerRepository;
  private readonly teamRepository: TeamRepository;

  constructor(coworkerRepository: CoworkerRepository, teamRepository: TeamRepository) {
    this.coworkerRepository = coworkerRepository;
    this.teamRepository = teamRepository;
  }

  async fetch(): Promise<CoworkerTeamModel[]> {
    const teams = await this.teamRepository.fetch();
    const coworkers = await this.coworkerRepository.fetch();
    const newCoworkers: CoworkerTeamModel[] = coworkers.map((coworker) => ({
      id: coworker.id,
      email: coworker.email,
      name: coworker.name,
      phone: coworker.phone,
      team: teams.find(team => team.id === coworker.teamId) ?? {} as CoworkerTeamModel
    }))

    console.log('newCoworkers', newCoworkers)
    return newCoworkers;
  }
}
