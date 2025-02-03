import { Handler, Request, Response } from "express";
import { Task } from "../models/Task";
import { z } from "zod"
import { HttpError } from "../errors/HttpError";

// title, description, status, priority
const StoreRequestSchema = z.object({
  title : z.string(),
  description: z.string(),
  status: z.enum(['todo', 'doing', 'done']),
  priority: z.enum(['low', 'medium', 'high'])
})

const updateRequestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(['todo', 'doing', 'done']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
})

export class TaskController {
  index : Handler = (req, res) => {
    const tasks = Task.findAll()
    res.json(tasks)
  }

  store: Handler = (req, res) => {
    const parseBody = StoreRequestSchema.parse(req.body)
    const newTask = Task.create(parseBody)
    res.status(201).json(newTask)
  }

  show: Handler = (req, res) => {
    const { id } = req.params
    const task = Task.findById(+id)
    if (!task) throw new HttpError(404, "Task not found")
      res.json(task);
  }

  update: Handler = (req, res) => {
    const {id} = req.params
    const parseBody = updateRequestSchema.parse(req.body)
    const updatedTask = Task.update(+id, parseBody)
    if (!updatedTask) throw new HttpError(404, "Task not found")
      res.json(updatedTask)
  }

  delete: Handler = (req, res) => {
    const {id} = req.params
    const deletedTask = Task.delete(+id)
    if(!deletedTask) throw new HttpError(404, "Task not found")
      res.json(deletedTask)
  }
} 