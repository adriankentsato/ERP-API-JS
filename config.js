/**
 * Created By: Kent Adrian Sato
 * 
 * Date: February 16, 2024
 */

const dotenv = require('dotenv')

const env = dotenv.config({ path: '.env' })

if ( env.error ) throw new Error( env.error )

module.exports = {
    port: env.parsed.PORT,
    logger: env.parsed.LOGGER,
    db: {
        host: env.parsed.DB_HOST,
        name: env.parsed.DB_NAME,
        user: env.parsed.DB_USER,
        pass: env.parsed.DB_PASS,
        port: env.parsed.DB_PORT,
    },
}
