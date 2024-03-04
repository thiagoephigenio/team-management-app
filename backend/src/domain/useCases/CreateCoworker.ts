import { CoworkerModel } from '../models/Coworker';

export type CreateCoworkerModel = Omit<CoworkerModel, 'id' > & {
  teamId: string;
}

export interface CreateCoworker {
  create: (coworker: CreateCoworkerModel) => Promise<CoworkerModel>;
}