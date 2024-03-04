import { CoworkerModel } from '../../domain/models/Coworker';
import { UpdateCoworker } from '../../domain/useCases/UpdateCoworker';
import { CoworkerRepository } from '../protocols/CoworkerRepository';

export class UpdateCoworkerUseCase implements UpdateCoworker {
  private readonly coworkerRepository: CoworkerRepository;

  constructor(coworkerRepository: CoworkerRepository) {
    this.coworkerRepository = coworkerRepository;
  }

  async update(coworker: CoworkerModel): Promise<void> {
    return this.coworkerRepository.update(coworker);
  };

}