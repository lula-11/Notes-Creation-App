import { Service } from './service.js';
import { Note, Category } from '../models/models.js';

export class NotesService extends Service {
    constructor() {
        super(Note);
    }

    async getAll(query) {
        const where = {};
        if (typeof query?.archived !== 'undefined') {
            if (query.archived === 'true') where.archived = true;
            else if (query.archived === 'false') where.archived = false;
        }
        return await this.model.findAll({ where, include: { model: Category } });
    }

    async getById(id) {
        return await this.model.findByPk(id, { include: { model: Category } });
    }
}

export const notesService = new NotesService();
