import User from '../models/user.model'
import { CreateUserDto } from '../dtos/user.dto'

export class UserService {
  static async createUser (userData: CreateUserDto): Promise<User> {
    const user = await User.create({ ...userData })
    return user
  }

  static async getAllUsers (): Promise<User[]> {
    const users = await User.findAll()
    return users
  }
}
