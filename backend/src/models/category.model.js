import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    modifiedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'Categories',
    timestamps: false
});
