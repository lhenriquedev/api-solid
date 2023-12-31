import { FastifyInstance } from 'fastify'
import { register } from './controllers/RegisterController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
