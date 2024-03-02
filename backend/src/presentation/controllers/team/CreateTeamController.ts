import { CreateTeam } from '../../../domain/useCases/CreateTeam';
import { ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class CreateTeamController implements Controller {
  private readonly createTeam: CreateTeam;

  constructor(createTeam:CreateTeam) {
    this.createTeam = createTeam;
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name } = httpRequest.body;
      const team = await this.createTeam.create({
        name
      })
      return ok(team);
    } catch (error) {
      return serverError();
    }
  }
}