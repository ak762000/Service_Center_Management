const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
require('dotenv').config()
require('./db')
const userRoutes = require('./routes/userRoutes')
const customerRoutes = require('./routes/customerRoutes')
const swagger_ui = require('swagger-ui-express')
const swaggerSpec = require('./helpers/swagger')

//Initialize the port number
const port = process.env.PORT || 2000


//Built-in Middleware function
app.use(express.json())
app.use('/api/auth',userRoutes)
app.use('/api', customerRoutes)

//Swagger_UI 
app.use('/api-docs', swagger_ui.serve , swagger_ui.setup(swaggerSpec))


//Test Case
app.get('/',(req,res)=>{
    res.status(200).json({message : "Service Center Management"})
})


//Server running on the port 
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})