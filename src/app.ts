import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import api from "@routes/api";
import { errorHandler } from "@middlewares/Error";

import client, { collectDefaultMetrics, Registry } from 'prom-client';

const httpRequestTimer = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  // buckets for response time from 0.1ms to 1s
  buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500, 1000],
});

export class App {
  public server: Express;
  public register: Registry;

  constructor() {
    this.server = express();
    this.register = new client.Registry();
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
    this.server.use(cors());
    this.setMetrics();
    this.routes();
    this.server.use(errorHandler);
  }

  routes() {
    this.server.use(api);
  }

  getServer() {
    return this.server;
  }

  setMetrics() {
    this.register.setDefaultLabels({
      app: 'node-app',
    });

    collectDefaultMetrics({register: this.register});

    this.register.registerMetric(httpRequestTimer);

    this.server.use((req: Request, res: Response, next: NextFunction) => {
      const end = httpRequestTimer.startTimer();
    
      res.on('finish', () => {
        end({
          method: req.method,
          route: req.route ? req.route.path : req.path,
          code: res.statusCode,
        });
      });
    
      next();
    });

    this.server.get('/metrics', async (req: Request, res: Response) => {
      res.setHeader('Content-Type', this.register.contentType);
      res.send(await this.register.metrics());
    });
  }
}
