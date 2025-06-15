import { Request, Response } from 'express'
import { UserService } from '../services/user.service'

export const UserController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const user = await UserService.createUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ error: (error as Error).message })
    }
  },
  getAllUsers: async (_req: Request, res: Response) => {
    try {
      const users = await UserService.getAllUsers()
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: (error as Error).message })
    }
  }
}

