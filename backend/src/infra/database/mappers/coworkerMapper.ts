import { CoworkerModel } from '../../../domain/models/Coworker';
import { CoworkerDbModel } from '../models/CoworkerDbModel';

export const coworkerMapper = (coworker: CoworkerDbModel): CoworkerModel => ({
  id: coworker._id,
  name: coworker.name,
  email: coworker.email,
  phone: coworker.phone,
  teamId: coworker.teamId
});