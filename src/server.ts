import { Server } from "@overnightjs/core";
import { Application } from "express";
import bodyParser from "body-parser";

import "./database";
import ProfileController from "./controllers/ProfileController";
import UserController from "./controllers/UserController";

export class SetupServer extends Server {
  constructor(private port: number = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.stupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private stupControllers(): void {
    const profileController = new ProfileController();
    const userController = new UserController();

    this.addControllers([profileController, userController]);
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info("Server listening of port", this.port);
    });
  }
}

(async (): Promise<void> => {
  const server = new SetupServer();
  await server.init();
  server.start();
})();
