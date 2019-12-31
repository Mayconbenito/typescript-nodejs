import { Request, Response } from 'express'
import { Todo } from '../models/Todo'

class TodoController {
  public async index (req: Request, res: Response): Promise<Response> {
    const todos = await Todo.find()

    return res.status(200).json({ todos })
  }

  public async store (req, res): Promise<Response> {
    const { name, description } = req.body

    const todo = await Todo.create({ name, description })

    return res.status(200).json({ todo })
  }
}

export default new TodoController()
