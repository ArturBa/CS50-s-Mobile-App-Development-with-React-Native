import { User } from '../redux/interfaces';

export const getUserByIdFromUsers = (userId: number, users: User[]): User => {
  return users.filter((user: User) => user.id === userId)[0];
};
