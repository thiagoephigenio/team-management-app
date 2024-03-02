import { Patient } from '../../models';

export interface CreatePatient {
  create: (patient: Patient) => Promise<Patient>;
}
