import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from "./routes/index.routes.js";

import {PORT} from './config.js'

//start express module
const app = express()

//MIDLEWARE
app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        menssage: 'PAGE NOT FOUND'
    })
})

export default app;