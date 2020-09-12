import { Controller, Get, Post } from "@overnightjs/core";
import { Response, Request } from "express";

import ProfileRepository from "../repositories/ProfileRepository";

@Controller("profiles")
export default class ProfileController {
  @Post("")
  public async create(req: Request, res: Response): Promise<void> {
    const { gender, photo } = req.body;

    const profileRepository = new ProfileRepository();
    const profile = await profileRepository.create({ gender, photo });

    res.status(201).send(profile);
  }

  @Get("")
  public async get(req: Request, res: Response): Promise<void> {
    const profileRepository = new ProfileRepository();
    const profiles = await profileRepository.getAll();
    res.status(200).send(profiles);
  }
}
