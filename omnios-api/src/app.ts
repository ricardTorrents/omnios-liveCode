import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import dotenv from 'dotenv';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    dotenv.config();
    this.setConfig();
    this.setControllers();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    // // Enables cors
    this.app.use(cors());
  }
  private setControllers() {
    //   // Creating a new instance of our Pokemon Controller
  }
}

export default new App().app;
