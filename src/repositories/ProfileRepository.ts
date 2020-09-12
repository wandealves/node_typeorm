import { getRepository, Repository } from "typeorm";

import Profile from "../models/Profile";

export default class ProfileRepository {
  private ormRepository: Repository<Profile>;

  constructor() {
    this.ormRepository = getRepository(Profile);
  }

  public async getAll(): Promise<Profile[]> {
    return this.ormRepository.find();
  }

  public async create({
    gender,
    photo
  }: Omit<Profile, "id">): Promise<Profile> {
    const profile = this.ormRepository.create({
      gender,
      photo
    });

    await this.ormRepository.save(profile);
    return profile;
  }
}
