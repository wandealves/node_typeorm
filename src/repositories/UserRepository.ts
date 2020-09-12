import { getRepository, Repository } from "typeorm";

import User from "../models/User";

export default class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async getAll(): Promise<User[]> {
    return this.ormRepository.find();
  }

  public async create(name: string, profile_id: string): Promise<User> {
    const user = this.ormRepository.create({
      name,
      profile_id
    });

    await this.ormRepository.save(user);
    return user;
  }
}
