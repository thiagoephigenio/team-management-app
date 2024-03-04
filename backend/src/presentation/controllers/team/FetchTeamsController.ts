import { FetchTeams } from '../../../domain/useCases/FetchTeams';
import { ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpResponse } from '../../protocols';

export class FetchTeamsController implements Controller {
  private readonly fetchTeams: FetchTeams;

  constructor(fetchTeams: FetchTeams) {
    this.fetchTeams = fetchTeams;
  }

  async handle (): Promise<HttpResponse> {
    try {
      const result = await this.fetchTeams.fetch();
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }
}