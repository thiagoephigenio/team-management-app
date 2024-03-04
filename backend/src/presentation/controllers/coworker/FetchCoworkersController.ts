import { FetchCoworkers } from '../../../domain/useCases/FetchCoworkers';
import { ok, serverError } from '../../helpers/http-helpers';
import { Controller, HttpResponse } from '../../protocols';

export class FetchCoworkersController implements Controller {
  private readonly fetchCoworkers: FetchCoworkers;

  constructor(fetchCoworkers: FetchCoworkers) {
    this.fetchCoworkers = fetchCoworkers;
  }

  async handle (): Promise<HttpResponse> {
    try {
      const result = await this.fetchCoworkers.fetch();
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }
}