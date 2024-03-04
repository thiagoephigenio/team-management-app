import axios from 'axios';
import { Team } from '../presentation/pages/teams/teams-list';
import { Coworker } from '../presentation/pages/coworkers/coworkers-list';
import { TeamData } from '../presentation/pages/teams/team-form';
import { CoworkerData } from '../presentation/pages/coworkers/coworker-form';

const baseURL = 'http://localhost:8080';

async function createTeamRequest(team: TeamData): Promise<Team> {
  return (await axios.post(`${baseURL}/team`, team)).data;
}
async function fetchTeamsRequest(): Promise<Team[]> {
  return (await axios.get(`${baseURL}/teams`)).data;
}
async function deleteTeamRequest(teamId: string): Promise<void> {
  return (await axios.delete(`${baseURL}/team/${teamId}`)).data;
}
async function createCoworkerRequest(
  coworker: CoworkerData,
): Promise<Coworker> {
  return (await axios.post(`${baseURL}/coworker`, coworker)).data;
}
async function updateCoworkerRequest(
  coworker: CoworkerData,
): Promise<Coworker> {
  return (await axios.put(`${baseURL}/coworker`, coworker)).data;
}
async function fetchCoworkersRequest(): Promise<Coworker[]> {
  return (await axios.get(`${baseURL}/coworkers`)).data;
}
async function deleteCoworkerRequest(coworkerId: string): Promise<void> {
  return (await axios.delete(`${baseURL}/coworker/${coworkerId}`)).data;
}

export {
  createTeamRequest,
  fetchTeamsRequest,
  deleteTeamRequest,
  createCoworkerRequest,
  updateCoworkerRequest,
  fetchCoworkersRequest,
  deleteCoworkerRequest,
};
