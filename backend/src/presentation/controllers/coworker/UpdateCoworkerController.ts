import { UpdateCoworker } from '../../../domain/useCases/UpdateCoworker';
import { ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class UpdateCoworkerController implements Controller {
  private readonly updateCoworker: UpdateCoworker;

  constructor(updateCoworker: UpdateCoworker) {
    this.updateCoworker = updateCoworker;
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, name, email, phone, teamId } = httpRequest.body;
      const coworker = await this.updateCoworker.update({
        id,
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