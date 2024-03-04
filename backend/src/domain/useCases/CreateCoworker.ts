import { CoworkerModel } from '../models/Coworker';
import { CoworkerTeamModel } from '../models/CoworkerTeam';

export type CreateCoworkerModel = Omit<CoworkerModel, 'id' > & {
  teamId: string;
}

export interface CreateCoworker {
  create: (coworker: CreateCoworkerModel) => Promise<CoworkerTeamModel>;
}