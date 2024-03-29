import { DeleteTeam } from '../../../domain/useCases/DeleteTeam';
import { badRequest, ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

export class DeleteTeamController implements Controller {
  private readonly deleteTeam: DeleteTeam;

  constructor(deleteTeam: DeleteTeam) {
    this.deleteTeam = deleteTeam;
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { teamId } = httpRequest.params;
      const result = await this.deleteTeam.delete(teamId);
      return ok(result);
    } catch (error) {

      if ((error as Error).message === 'DELETION_ERROR') {
        return badRequest({name: 'DELETION_ERROR', message: 'error: cannot remove team'})
      }
      return serverError();
    }
  }
}