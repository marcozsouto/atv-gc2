import { NextFunction, Request, Response } from "express";
import { Entity, InMemoryDB } from "@services/BaseService";

interface Film extends Entity {
  name: string;
}
const db = InMemoryDB.getInstance<Film>();

db.create({ name: "The boy and the heron" });
db.create({ name: "Poor Things" });

class FilmController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result: Film[] = db.getAll();

      return res.json({ status: true, data: result });
    } catch (error: any) {
      next(error);
    }
  };

  public store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;

      let film: Film = { name: name };
      film = db.create(film);

      return res.json({ status: true, data: film });
    } catch (error: any) {
      next(error);
    }
  };

  public destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number(req.params.id);

      db.delete(id);

      return res.status(204).json();
    } catch (error: any) {
      next(error);
    }
  };
}

export default new FilmController();
