import { DeleteCoworker } from '../../domain/useCases/DeleteCoworker';
import { CoworkerRepository } from '../protocols/CoworkerRepository';

export class DeleteCoworkerUseCase implements DeleteCoworker {
  private readonly coworkerRepository;

  constructor(coworkerRepository: CoworkerRepository) {
    this.coworkerRepository = coworkerRepository;
  }

  public async delete(coworkerId: string): Promise<void>{
    return this.coworkerRepository.delete(coworkerId);
  };
}