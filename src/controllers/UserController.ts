import { Controller, Get, Post } from "@overnightjs/core";
import { Response, Request } from "express";

import UserRepository from "../repositories/UserRepository";

@Controller("users")
export default class UserController {
  @Post("")
  public async create(req: Request, res: Response): Promise<void> {
    const { name, profile_id } = req.body;

    const userRepository = new UserRepository();
    const profile = await userRepository.create(name, profile_id);

    res.status(201).send(profile);
  }

  @Get("")
  public async get(req: Request, res: Response): Promise<void> {
    const userRepository = new UserRepository();
    const users = await userRepository.getAll();
    res.status(200).send(users);
  }
}
