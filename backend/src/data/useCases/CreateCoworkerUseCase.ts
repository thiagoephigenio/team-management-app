import { CoworkerModel } from '../../domain/models/Coworker';
import { CreateCoworker, CreateCoworkerModel } from '../../domain/useCases/CreateCoworker';
import { CoworkerRepository } from '../protocols/CoworkerRepository';

export class CreateCoworkerUseCase implements CreateCoworker {
  private readonly coworkerRepository: CoworkerRepository;

  constructor(coworkerRepository: CoworkerRepository) {
    this.coworkerRepository = coworkerRepository;
  }

  async create(coworker: CreateCoworkerModel): Promise<CoworkerModel> {
    const createdCoworker = await this.coworkerRepository.add(coworker);

    return createdCoworker;
  };

}