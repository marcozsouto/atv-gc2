import FilmController from "@/api/controllers/FilmController"
import { Router } from "express"

const api = Router()

api.get("/films", FilmController.index);

export default api