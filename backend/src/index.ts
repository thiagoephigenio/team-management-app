import fastify from 'fastify'
import { CreateTeamController } from './presentation/controllers/team/CreateTeamController'
import { CreateTeamUseCase } from './data/useCases/CreateTeamUseCase'
import TeamDbRepository from './infra/database/TeamDbRepository'
import { DeleteTeamController } from './presentation/controllers/team/DeleteTeamController'
import { DeleteTeamUseCase } from './data/useCases/DeleteTeamUseCase'
import { bodyJsonCoworkerSchema, bodyJsonTeamSchema } from './httpRequestSchema'
import { FetchTeamsUseCase } from './data/useCases/FetchTeamsUseCase'
import { FetchTeamsController } from './presentation/controllers/team/FetchTeamsController'
import CoworkerDbRepository from './infra/database/CoworkerDbRepository'
import { CreateCoworkerController } from './presentation/controllers/coworker/CreateCoworker'
import { CreateCoworkerUseCase } from './data/useCases/CreateCoworkerUseCase'
import { UpdateCoworkerUseCase } from './data/useCases/UpdateCoworkerUseCase'
import { UpdateCoworkerController } from './presentation/controllers/coworker/UpdateCoworkerController'
import { FetchCoworkersController } from './presentation/controllers/coworker/FetchCoworkersController'
import { DeleteCoworkerController } from './presentation/controllers/coworker/DeleteCoworker'
import { FetchCoworkersUseCase } from './data/useCases/FetchCoworkers'
import { DeleteCoworkerUseCase } from './data/useCases/DeleteCoworker'

const app = fastify({logger: true});
app.addContentTypeParser(
  'text/plain',
  { parseAs: 'string' },
  (_req, body, done) => {
    try {
      const json = JSON.parse(body as string);
      done(null, json);
    } catch (err) {
      done(err as Error, undefined);
    }
  }
);

const teamDbRepository = new TeamDbRepository();
const coworkerDbRepository = new CoworkerDbRepository();
const createTeamUseCase = new CreateTeamUseCase(teamDbRepository);
const createCoworkerUseCase = new CreateCoworkerUseCase(coworkerDbRepository);
const updateCoworkerUseCase = new UpdateCoworkerUseCase(coworkerDbRepository);
const fetchCoworkersUseCase = new FetchCoworkersUseCase(coworkerDbRepository, teamDbRepository);
const deleteCoworkerUseCase = new DeleteCoworkerUseCase(coworkerDbRepository);
const deleteTeamUseCase = new DeleteTeamUseCase(teamDbRepository);
const fetchTeamsUseCase = new FetchTeamsUseCase(teamDbRepository);
const createTeamController = new CreateTeamController(createTeamUseCase);
const createCoworkerController = new CreateCoworkerController(createCoworkerUseCase);
const updateCoworkerController = new UpdateCoworkerController(updateCoworkerUseCase);
const fetchCoworkersController = new FetchCoworkersController(fetchCoworkersUseCase);
const deleteCoworkerController = new DeleteCoworkerController(deleteCoworkerUseCase);
const deleteTeamController = new DeleteTeamController(deleteTeamUseCase);
const fetchTeamsController = new FetchTeamsController(fetchTeamsUseCase);

app.get('/teams', async () => {
  return fetchTeamsController.handle();
})

app.post('/team', {schema: {body:  bodyJsonTeamSchema}}, async (request, _reply) => createTeamController.handle(request))

app.delete('/team/:teamId', async (request, reply) => {
  return deleteTeamController.handle(request);
})

app.get('/coworkers', async (request, reply) => {
  return fetchCoworkersController.handle();
})

app.post('/coworker', {schema: {body:  bodyJsonCoworkerSchema}}, async (request, reply) => {
  return createCoworkerController.handle(request);
})

app.put('/coworker', {schema: {body:  bodyJsonCoworkerSchema}}, async (request, reply) => {
  return updateCoworkerController.handle(request);
})

app.delete('/coworker/:coworkerId', async (request, reply) => {
  return deleteCoworkerController.handle(request);
})

app.listen({ port: 8080 }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})