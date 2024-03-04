import { CoworkerModel } from '../../domain/models/Coworker';
import { CoworkerTeamModel } from '../../domain/models/CoworkerTeam';
import { CreateCoworker, CreateCoworkerModel } from '../../domain/useCases/CreateCoworker';
import { CoworkerRepository } from '../protocols/CoworkerRepository';
import { TeamRepository } from '../protocols/TeamRepository';

export class CreateCoworkerUseCase implements CreateCoworker {
  private readonly coworkerRepository: CoworkerRepository;
  private readonly teamRepository: TeamRepository;

  constructor(coworkerRepository: CoworkerRepository, teamRepository: TeamRepository) {
    this.coworkerRepository = coworkerRepository;
    this.teamRepository = teamRepository;
  }

  async create(coworker: CreateCoworkerModel): Promise<CoworkerTeamModel> {
    const createdCoworker = await this.coworkerRepository.add(coworker);
    const team = await this.teamRepository.findById(createdCoworker.teamId);

    return {
      id: createdCoworker.id,
      email: createdCoworker.email,
      name: createdCoworker.name,
      phone: createdCoworker.phone,
      team,
    };
  };

}