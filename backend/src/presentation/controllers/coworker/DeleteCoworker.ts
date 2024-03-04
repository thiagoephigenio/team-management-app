import { DeleteCoworker } from '../../../domain/useCases/DeleteCoworker';
import { ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class DeleteCoworkerController implements Controller {
  private readonly deleteCoworker: DeleteCoworker;

  constructor(deleteCoworker: DeleteCoworker) {
    this.deleteCoworker = deleteCoworker;
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { coworkerId } = httpRequest.params;
      const result = await this.deleteCoworker.delete(coworkerId);
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }
}