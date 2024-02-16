/**
 * Created By: Kent Adrian Sato
 * 
 * Date: February 16, 2024
 */

const config = require('./config')

const fastify = require('fastify')({ logger: config.logger })

fastify.listen({ port: config.port }, ( err ) => {
    if ( err ) {
        fastify.log.error( err )
        process.exit( 1 )
    }
})
