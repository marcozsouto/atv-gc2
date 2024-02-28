import FilmController from "@/api/controllers/FilmController"
import { Router } from "express"

const api = Router()

api.get("/films", FilmController.index);
api.post("/films", FilmController.store);

export default api