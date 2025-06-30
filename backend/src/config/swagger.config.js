import swaggerJsdoc from "swagger-jsdoc";
import {fileURLToPath} from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: "Notes web app API",
            description: "REST API for the management of notes."
        }
    },
    apis: [`${__dirname}/../docs/**/*.yaml`]
}
export const docsSpecs = swaggerJsdoc(swaggerOptions);