import { PrismaUserRepository } from '../../repository/prisma/prisma-users-repository'
import { RegisterUserCase } from '../register'

export function makeRegisterUseCase() {
  const UsersRepository = new PrismaUserRepository()
  const registerUserCase = new RegisterUserCase(UsersRepository)

  return registerUserCase
}
