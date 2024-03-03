import fastify from 'fastify'
import { CreateTeamController } from './presentation/controllers/team/CreateTeamController'
import { CreateTeamUseCase } from './data/useCases/CreateTeamUseCase'
import TeamDbRepository from './infra/database/TeamDbRepository'
import { DeleteTeamController } from './presentation/controllers/team/DeleteTeamController'
import { DeleteTeamUseCase } from './data/useCases/DeleteTeamUseCase'
import { bodyJsonCoworkerSchema, bodyJsonTeamSchema } from './httpRequestSchema'

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
const createTeamUseCase = new CreateTeamUseCase(teamDbRepository);
const deleteTeamUseCase = new DeleteTeamUseCase(teamDbRepository);
const createTeamController = new CreateTeamController(createTeamUseCase);
const deleteTeamController = new DeleteTeamController(deleteTeamUseCase);

app.get('/teams', async (request, reply) => {
  //TODO
})

app.post('/team', {schema: {body:  bodyJsonTeamSchema}}, async (request, _reply) => createTeamController.handle(request))

app.delete('/team/:teamId', async (request, reply) => {
  return deleteTeamController.handle(request);
})

app.get('/coworkers', async (request, reply) => {
  //TODO
})

app.post('/coworker', {schema: {body:  bodyJsonCoworkerSchema}}, async (request, reply) => {
  //TODO
})

app.delete('/coworker/:id', async (request, reply) => {
  //TODO
})

app.listen({ port: 8080 }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})