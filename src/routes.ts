import { Router } from 'express'
import TodoController from './controllers/TodoController'

const routes = Router()

routes.get('/todos', TodoController.index)
routes.post('/todos', TodoController.store)

export default routes
