import { CreateCoworker, CreateCoworkerModel } from '../../../domain/useCases/CreateCoworker';
import { ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class CreateCoworkerController implements Controller {
  private readonly createCoworker: CreateCoworker;

  constructor(createCoworker: CreateCoworker) {
    this.createCoworker = createCoworker;
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, phone, teamId } = httpRequest.body;
      const coworker = await this.createCoworker.create({
        name,
        email,
        phone,
        teamId,
      })
      return ok(coworker);
    } catch (error) {
      return serverError();
    }
  }
}