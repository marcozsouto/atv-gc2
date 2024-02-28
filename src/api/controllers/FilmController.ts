import { NextFunction, Request, Response } from "express"
import { Entity, InMemoryDB } from "@services/BaseService";

interface Film extends Entity {
    name: string;
}
const db = InMemoryDB .getInstance<Film>();


db.create({id: '1', name: 'The boy and the heron'});
db.create({id: '2', name: 'Poor Things'});

class FilmController {

    public index = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: Film[] = db.getAll();

            return res.json({ status: true, data: result });
        } catch (error: any) {
            next(error)
        }
    }
}

export default new FilmController()