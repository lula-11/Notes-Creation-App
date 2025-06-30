import Router from './router.js'
import { notesController } from '../controllers/controllers.js' 

class NotesRouter extends Router {
    init() {
        this.get('/', ["PUBLIC"], async (req, res) => this.controller.get(req, res));

        this.post('/', ["PUBLIC"], async (req, res) => this.controller.create(req, res));

        this.delete('/:id', ["PUBLIC"], async (req, res) => this.controller.delete(req, res));

        this.patch('/:id', ["PUBLIC"], async (req, res) => this.controller.update(req, res));
    }
}

export const notesRouter = new NotesRouter(notesController);