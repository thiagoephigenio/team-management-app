import { CreateTeamRepository } from '../../data/protocols/CreateTeamRepository';
import { TeamModel } from '../../domain/models/Team';
import { CreateTeamModel } from '../../domain/useCases/CreateTeam';
import nedb from 'nedb';

export default class TeamDbRepository implements CreateTeamRepository {
  db = new nedb({filename: 'banco.db', autoload: true});
  
  public async add(team: CreateTeamModel): Promise<TeamModel> {
    const createdTeam = await new Promise<TeamModel>((resolve, reject) =>{
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
}