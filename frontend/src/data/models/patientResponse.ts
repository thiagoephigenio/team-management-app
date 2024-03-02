import { AddressResponse } from './addressResponse';

export interface PatientResponse {
  id: string;
  firstName: string;
  lastName?: string;
  birthDate: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  cellphone?: string;
  address?: AddressResponse;
}
