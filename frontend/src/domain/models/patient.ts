import { Address } from './address';

export interface Patient {
  id: string;
  firstName: string;
  lastName?: string;
  birthDate: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  cellphone?: string;
  address?: Address;
}
