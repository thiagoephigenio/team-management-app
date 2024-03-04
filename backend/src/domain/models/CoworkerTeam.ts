import { TeamModel } from './Team';

export interface CoworkerTeamModel {
  id: string;
  name: string; 
  email: string;
  phone: string;
  team: TeamModel;
}