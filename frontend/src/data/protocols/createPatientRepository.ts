import { Patient } from '../../domain/models';

export interface ICreatePatient {
  create: (patient: Patient) => Promise<Patient>;
}
