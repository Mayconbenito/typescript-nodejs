import { Document, Schema, Model, model } from 'mongoose'
import { TodoInterface } from '../interfaces/Todo'

export interface TodoSchema extends TodoInterface, Document {}

const TodoSchema = new Schema({
  name: { type: String, required: true },
  description: String
}, {
  timestamps: true
})

export const Todo: Model<TodoSchema> = model<TodoSchema>('Todo', TodoSchema)
