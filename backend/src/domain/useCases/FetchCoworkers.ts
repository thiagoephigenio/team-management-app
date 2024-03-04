import { CoworkerModel } from '../models/Coworker';
import { CoworkerTeamModel } from '../models/CoworkerTeam';

export interface FetchCoworkers {
  fetch: () => Promise<CoworkerTeamModel[]>;
}