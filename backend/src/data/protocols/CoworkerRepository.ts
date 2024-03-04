import { CoworkerModel } from '../../domain/models/Coworker';
import { CreateCoworkerModel } from '../../domain/useCases/CreateCoworker';

export interface CoworkerRepository {
  add : (coworker: CreateCoworkerModel) => Promise<CoworkerModel>;
  delete : (coworkerId: string) => Promise<void>;
  update : (coworker: CoworkerModel) => Promise<void>;
  fetch: () => Promise<CoworkerModel[]>;
  findByTeam: (teamId: string) => Promise<CoworkerModel[]>;
}