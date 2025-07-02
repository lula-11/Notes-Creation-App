import express from 'express';
import cors from 'cors';
import { notesRouter } from './routes/notesRouter.js';
import { categoriesRouter } from './routes/categoriesRouter.js';
import { docsSpecs } from './config/swagger.config.js';
import cookieParser from 'cookie-parser';
import swaggerUiExpress from "swagger-ui-express";
import { initializePassport } from './config/passport.config.js'
import passport from 'passport';
import { addLogger } from './config/logger.config.js';
import { sequelize } from './config/database.js';
import './models/models.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());
app.use(cors());

app.use(addLogger);
app.use('/api/notes', notesRouter.getRouter());
app.use('/api/categories', categoriesRouter.getRouter());
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(docsSpecs));

sequelize.authenticate()
    .then(async () => {
        console.log('Database connection established');
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    });