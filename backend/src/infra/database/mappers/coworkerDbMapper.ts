import { CoworkerModel } from '../../../domain/models/Coworker';
import { CoworkerDbModel } from '../models/CoworkerDbModel';

export const coworkerDbMapper = (coworker: CoworkerModel): CoworkerDbModel => ({
  _id: coworker.id,
  name: coworker.name,
  email: coworker.email,
  phone: coworker.phone,
  teamId: coworker.teamId
});