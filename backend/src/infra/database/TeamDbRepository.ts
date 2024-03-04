import { TeamRepository } from '../../data/protocols/TeamRepository';
import { TeamModel } from '../../domain/models/Team';
import { CreateTeamModel } from '../../domain/useCases/CreateTeam';
import nedb from 'nedb';
import { teamMapper } from './mappers/teamMapper';
import { TeamDbModel } from './models/TeamDbModel';

export default class TeamDbRepository implements TeamRepository {
  db = new nedb({filename: 'nedb/team.db', autoload: true});
  
  public async add(team: CreateTeamModel): Promise<TeamModel> {
    const createdTeam = await new Promise<TeamModel>((resolve, reject) =>{
      this.db.insert(team, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(teamMapper(result as TeamDbModel))
        }
      });
    })

    return createdTeam;
  }

  public async delete(teamId: string): Promise<void> {
    return new Promise<void>((resolve, reject) =>{
      this.db.remove({_id: teamId}, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve()
        }
      });
    })
  }

  public async fetch(): Promise<TeamModel[]> {
    const teams = await new Promise<TeamModel[]>((resolve, reject) =>{
      this.db.find({}, function (err: Error, result: TeamDbModel[]) {
        if (err) {
          reject(err);
        } else {
          resolve(result.map(team => teamMapper(team)))
        }
      });
    })

    return teams;
  }

  public async findById(teamId: string): Promise<TeamModel>{
    const team = await new Promise<TeamModel>((resolve, reject) =>{
      this.db.findOne({_id: teamId}, function (err: Error | null, result: TeamDbModel) {
        if (err) {
          reject(err);
        } else {
          resolve(teamMapper(result))
        }
      });
    })

    return team;
  };
  
}