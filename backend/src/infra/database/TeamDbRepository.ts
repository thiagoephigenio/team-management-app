import { TeamRepository } from '../../data/protocols/TeamRepository';
import { TeamModel } from '../../domain/models/Team';
import { CreateTeamModel } from '../../domain/useCases/CreateTeam';
import nedb from 'nedb';

export default class TeamDbRepository implements TeamRepository {
  db = new nedb({filename: 'nedb/team.db', autoload: true});
  
  public async add(team: CreateTeamModel): Promise<TeamModel> {
    const createdTeam = await new Promise<TeamModel>((resolve, reject) =>{
      console.log('team', team)
      this.db.insert(team, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve({id: result._id, name: result.name})
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
}