const swagger_jsdoc = require('swagger-jsdoc')
const ui = require('swagger-ui-express')

const options = {
    swaggerDefinition : {
        openapi : '3.0.0',
        info : {
            title : "Service Center Management",
            version : '1.0.0',
            description : 'Service Center Api Documentation'
        },
        components : {
            securitySchemes : {
                bearerAuth : {
                    type : 'http',
                    scheme : 'bearer',
                    bearerFormat : 'JWT'
                },
            },
        },
        security : [{ bearerAuth : [] }]
    },
        servers : [
            {
                url : 'http://localhost:2000',
                description : 'Development Server'
            }
        ],
        apis : [
            './routes/userRoutes.js'  ,  './routes/swaggerRoutes.js'
        ]
}

const swaggerSpec = swagger_jsdoc(options)

module.exports = swaggerSpec