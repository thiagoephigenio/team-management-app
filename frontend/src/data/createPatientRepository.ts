import { Patient } from '../domain/models';
import { CreatePatientRequest } from './api/createPatientRequest';
import { ICreatePatient } from './protocols/createPatientRepository';

export class CreatePatientRepository implements ICreatePatient {
  private readonly service: CreatePatientRequest;

  constructor(service: CreatePatientRequest) {
    this.service = service;
  }

  async create(patient: Patient): Promise<Patient> {
    const createdPatient = await this.service.create(patient);

    return createdPatient;
  }
}
