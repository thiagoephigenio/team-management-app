import Nedb from 'nedb';
import { CoworkerRepository } from '../../data/protocols/CoworkerRepository';
import { CreateCoworkerModel } from '../../domain/useCases/CreateCoworker';
import { CoworkerModel } from '../../domain/models/Coworker';
import { coworkerMapper } from './mappers/coworkerMapper';
import { CoworkerDbModel } from './models/CoworkerDbModel';
import { coworkerDbMapper } from './mappers/coworkerDbMapper';

export default class CoworkerDbRepository implements CoworkerRepository {
  db = new Nedb({filename: 'nedb/coworker.db', autoload: true});
  
  public async add(coworker: CreateCoworkerModel): Promise<CoworkerModel> {
    const createdCoworker = await new Promise<CoworkerModel>((resolve, reject) =>{
      this.db.insert(coworker, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(coworkerMapper(result as CoworkerDbModel))
        }
      });
    })

    return createdCoworker;
  }
  public async update(coworker: CoworkerModel): Promise<void> {
    const createdCoworker = await new Promise<void>((resolve, reject) =>{
      this.db.update({ _id: coworker.id }, coworkerDbMapper(coworker), {},function (err, _result) {
        if (err) {
          reject(err);
        } else {
          resolve()
        }
      });
    })

    return createdCoworker;
  }

  public async delete(coworkerId: string): Promise<void> {
    return new Promise<void>((resolve, reject) =>{
      this.db.remove({_id: coworkerId}, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve()
        }
      });
    })
  }

  public async fetch(): Promise<CoworkerModel[]> {
    const coworkers = await new Promise<CoworkerModel[]>((resolve, reject) =>{
      this.db.find({}, function (err: Error, result: CoworkerDbModel[]) {
        if (err) {
          reject(err);
        } else {
          resolve(result.map(coworker => coworkerMapper(coworker)));
        }
      });
    })

    return coworkers;
  }

  public async findByTeam(teamId: string): Promise<CoworkerModel[]> {
    const coworkers = await new Promise<CoworkerModel[]>((resolve, reject) =>{
      this.db.find({teamId}, function (err: Error | null, result: CoworkerDbModel[]) {
        if (err) {
          reject(err);
        } else {
          resolve(result.map(coworker => coworkerMapper(coworker)));
        }
      });
    })

    return coworkers;
  };
}