import fastify from 'fastify'
import { CreateTeamController } from './presentation/controllers/team/CreateTeamController'
import { CreateTeamUseCase } from './data/useCases/CreateTeamUseCase'
import TeamDbRepository from './infra/database/TeamDbRepository'

const app = fastify({logger: true})
const teamDbRepository = new TeamDbRepository();
const createTeamUseCase = new CreateTeamUseCase(teamDbRepository);
const createTeamController = new CreateTeamController(createTeamUseCase);

app.get('/teams', async (request, reply) => {
  //TODO
})

app.post('/team', async (request, reply) => {
  console.log('httpRequest')
  return createTeamController.handle(request)
})

app.delete('/team/:id', async (request, reply) => {
  //TODO
})

app.get('/coworkers', async (request, reply) => {
  //TODO
})

app.post('/coworker', async (request, reply) => {
  //TODO
})

app.delete('/coworker/:id', async (request, reply) => {
  //TODO
})

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})