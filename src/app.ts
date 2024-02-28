import express, { Express } from "express"
import cors from "cors"
import api from "@routes/api"

export class App {
   public server: Express

   constructor() {
      this.server = express()
      this.server.use(express.urlencoded({ extended: true }))
      this.server.use(express.json())
      this.server.use(cors())
      this.routes()
   }

   routes() {
      this.server.use(api)
   }
}