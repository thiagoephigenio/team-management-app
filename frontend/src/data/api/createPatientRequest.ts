import { Patient } from '../../domain/models';
import { PatientResponse } from '../models/patientResponse';

export interface CreatePatientRequest {
  create: (patient: Patient) => Promise<PatientResponse>;
}
