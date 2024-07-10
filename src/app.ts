import express, { Express } from "express";
import cors from "cors";
import api from "@routes/api";
import { errorHandler } from "@middlewares/Error";

export class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
    this.server.use(cors());
    this.routes();
    this.server.use(errorHandler);
  }

  routes() {
    this.server.use(api);
  }

  getServer() {
    return this.server;
  }
}
