/**
 * Created By: Kent Adrian Sato
 * 
 * Date: February 16, 2024
 */

const config = require('../config')

module.exports.mysql = {
    dialect: 'mysql',
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    port: config.db.port,

    migrationStorage: 'json',
    migrationStoragePath: 'sequelizeMeta.json',
    migrationStorageTableName: 'sequelize_meta',

    seederStorage: 'json',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'sequelize_data',
}

