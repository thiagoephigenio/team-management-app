import { CoworkerModel } from '../models/Coworker';

export interface UpdateCoworker {
  update: (coworker: CoworkerModel) => Promise<void>;
}